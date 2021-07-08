const date = new Date()
let timer = null
const container = document.querySelector('.container')
const time = document.querySelector('.time')

const button = document.createElement('button')
button.textContent = 'start clock'
container.append(button)

const stopButton = document.createElement('button')
stopButton.textContent = 'stop clock'
container.append(stopButton)

button.addEventListener('click', startClock)
button.addEventListener('click', setStartTimeStamp)
stopButton.addEventListener('click', stopClock)
stopButton.addEventListener('click', setStopTimeStamp)

button.addEventListener("click", function(){
    if(timer !== null){
        stopClock()
    } else {
      timer = setInterval(startClock, 1000);
    }
  })

function startClock(){
    time.textContent = new Date().toLocaleTimeString()
    container.append(time)
}

function stopClock(){
    clearInterval(timer)
    timer = null
}

function setStartTimeStamp(){
    const startTimeStamp = document.createElement('p')
    const input = document.createElement('input')

    input.innerHTML = 
    `
        <form id="activity">
            Activity: <input type="text" name="activity">
        </form>
    `
    startTimeStamp.textContent = `Start Time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

    container.append(startTimeStamp)
    container.append(input)
}

function setStopTimeStamp(){
    const endTime = new Date()
    const stopTimeStamp = document.createElement('p')
    const hr = document.createElement('p')

    stopTimeStamp.textContent = `End Time: ${endTime.getHours()}:${endTime.getMinutes()}:${endTime.getSeconds()}`
    hr.innerHTML = `<hr>`
    time.textContent = ""
    
    container.append(stopTimeStamp)
    container.append(hr)

    

    // the input needs to be saved and stored on the page with the start and end time. 
}


