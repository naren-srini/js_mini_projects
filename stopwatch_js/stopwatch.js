//* Simple stopwatch functionality using JavaScript

function stopWatch() {

    let start, end, running, duration = 0;

    // Constructor to perform start operation
    this.start = () => {
        // Validation check before starting the stopwatch
        if (running) {
            throw new Error('The stopwatch has started already...');
        }
        // Starting the stopwatch by changing the running to true
        running = true;
        start = new Date(); // Storing the start time

    };

    // Constructor to perform stop operation
    this.stop = () => {
        // Validation check before stopping the watch
        if (!running) {
            throw new Error('Stopwatch not started yet..');
        }
        // Stopping the stopwatch by changing the running to false
        running = false;
        end = new Date(); // Storing the end time
        // Calculating the seconds from difference
        const seconds = (end.getTime() - start.getTime()) / 1000;
        duration = duration + seconds;
    };

    // Constructor to perform reset operation
    this.reset = () => {
        start = null;
        end = null;
        running = false;
        duration = 0;
    };

    // Creating a read-only property to display the duration of stopwatch 
    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
    });
}

// Can use swt in the console to perform the functions 
const swt = new stopWatch();