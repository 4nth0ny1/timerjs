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
    const startTime = new Date()
    const timeContainer = document.createElement('div')
    const startTimeStamp = document.createElement('p')
    const input = document.createElement('input')

    timeContainer.classList.add('time-container')

    input.innerHTML = 
    `
        <form id="activity">
            Activity: <input type="text" name="activity">
        </form>
    `
    startTimeStamp.innerHTML = `
    
        Start Time: <span class="start-time">${startTime.getHours()}:${startTime.getMinutes()}:${startTime.getSeconds()}</span>
    `

    timeContainer.append(startTimeStamp)
    timeContainer.append(input)
    container.append(timeContainer)
}

function setStopTimeStamp(){
    const endTime = new Date()
    const nodes = document.querySelectorAll('.time-container')
    const timeContainer = nodes[nodes.length - 1]
    const stopTimeStamp = document.createElement('p')
    const hr = document.createElement('p')

    stopTimeStamp.innerHTML = `
        End Time: <span class="end-time">${endTime.getHours()}:${endTime.getMinutes()}:${endTime.getSeconds()}</span>
    `
    time.textContent = ""
    
    timeContainer.append(stopTimeStamp)

    getTimeDifference()
}

function getTimeDifference(){
    const nodes = document.querySelectorAll('.end-time')
    const endTime = nodes[nodes.length - 1].textContent

    const startNodes = document.querySelectorAll('.start-time')
    const startTime = startNodes[startNodes.length - 1].textContent

    const difference = toSeconds(endTime) - toSeconds(startTime)
    const timeContainerNodes = document.querySelectorAll('.time-container')

    const lastNode = timeContainerNodes[timeContainerNodes.length - 1]

    const p = document.createElement('p')

    p.textContent = `Time Difference: ${difference} seconds`

    lastNode.appendChild(p)
}


function toSeconds(hms){
    var a = hms.split(':') // split it at the colons

    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2])

    return seconds
}

