// Simple stopwatch functionality using JavaScript
function stopWatch() {

    let start, end, running, duration = 0;

    this.start = () => {
        // Validation check before starting the stopwatch
        if (running) {
            throw new Error('The stopwatch has started already...');
        }
        // Starting the stopwatch by changing the running to true
        running = true;
        start = new Date(); // Storing the start time

    };

    this.stop = () => {
        // Validation check before stopping the watch
        if (!running) {
            throw new Error('Stopwatch not started yet..');
        }
        // Stopping the stopwatch by changing the running to false
        running = false;
        end = new Date(); // Storing the end time

    };

    this.reset = () => {

    };

    // Creating a read-only property to display the duration of stopwatch 
    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
    });
}

const swt = new stopWatch();