import './styles.css';

const TERMINAL_BG = '#000';
const TERMINAL_FG = 'white';
const CELL_WIDTH = 12;
const CELL_HEIGHT = 16;

interface point {
    x: number
    y: number
}

var cursor: point = {
    x: -1,
    y: -1
}

var pval: string;

var ms1 = Date.now();

function ready(fn: any) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

// This block is quite useless
// I'm just too used to go
function len(val: any): number {
    return val.length
}

ready(() => {

    function getPixelSize(size: number): string {
        return size.toString() + 'px';
    }

    var lines: string[][]=[];

    function println(str: string) {
        let line = []
        for (let c of str) {
            line.push(c);
        }
        lines.push(line);
    }
    function prompt() {
        let line: string[] = [];
        line.push('$', ' ');
        lines.push(line);
        cursor = {
            x: len(line),
            y: len(lines)-1
        }
        console.log(cursor)
        let minx = len(line)
        
        // Keylogger lol (>_<)
        let keylogger = window.addEventListener('keypress', (e) => {
            console.log(e.key);
            if (e.key.length < 2) {
                lines[cursor.y].push(e.key);
                cursor.x++;
            } else if ((e.key === 'Delete' || e.keyCode === 8) && cursor.x > minx) {
                lines[cursor.y].pop();
                cursor.x--;
            } else if (e.key === 'Enter') {
                cursor = {
                    x: -1,
                    y: -1
                }
                pval = lines[cursor.y].slice(minx).join('');
            }
        })
    }
    println('I');
    println('am');
    println('Tolulope Olagunju');
    println('');
    
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    document.body.appendChild(canvas)

    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
    canvas.style.backgroundColor = TERMINAL_BG;
    
    window.addEventListener('resize', () => {
        canvas.width = document.documentElement.clientWidth;
        canvas.height = document.documentElement.clientHeight;
    })

    prompt();

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Run this immediately after to get set the active cursor location
        if (cursor.x != -1) {
            var ms2 = Date.now();
            var ms = ms2-ms1;
            if (Math.floor(ms/500)%2 != 0) {
                ctx.beginPath();
                ctx.fillStyle = "green";
                ctx.fillRect((cursor.x * CELL_WIDTH)+CELL_WIDTH/2, (cursor.y * (CELL_HEIGHT+2))+CELL_HEIGHT, CELL_WIDTH, CELL_HEIGHT+3);
            }
            // blinkCursor(canvas, cursor);
        }

        let i=0;
        for (let line of lines) {
            let x=0;
            for (let char of line) {
                ctx.beginPath();
                ctx.font = getPixelSize(CELL_HEIGHT-3) + " sans-serif";
                ctx.fillStyle = TERMINAL_FG;
                // console.log(char);
                ctx.fillText(char,(x * CELL_WIDTH)+CELL_WIDTH/2,(i * (CELL_HEIGHT+6))+CELL_HEIGHT);
                x++;
            }
            i++;
        }
        window.requestAnimationFrame(draw)
    }
    draw();
})