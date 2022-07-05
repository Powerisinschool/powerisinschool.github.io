import './styles.css';
import Hello from './assets/logo.svg';
import Source from './assets/bg.png';

var bg = new Image();
bg.src = Source;

var logo = new Image();
logo.src = Hello;

var contact = {
    width: 100,
    height: 40,
};

function percent(percentage: number, value: number): number {
    return (percentage / 100) * value
}

function ready(fn: any) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(async () => {
    // let container = document.createElement('div');
    // container.style.width = '100%';
    // container.style.height = document.documentElement.clientHeight + 'px';
    // container.style.backgroundColor = '#020307';

    // var header = document.createElement('header');

    // document.body.appendChild(container);

    // window.addEventListener('resize', () => {
    //     container.style.height = document.documentElement.clientHeight + 'px';
    // });

    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
    canvas.style.backgroundColor = '#020307';

    document.body.appendChild(canvas);

    window.addEventListener('resize', () => {
        canvas.width = document.documentElement.clientWidth;
        canvas.height = document.documentElement.clientHeight;
    })

    const draw = async () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();

        const ratio = bg.width / bg.height;
        let newWidth = canvas.width;
        let newHeight = newWidth / ratio;
        if (newHeight < canvas.height) {
            newHeight = canvas.height;
            newWidth = newHeight * ratio;
        }
        const xOffset = newWidth > canvas.width ? (canvas.width - newWidth) / 2 : 0;
        const yOffset = newHeight > canvas.height ? (canvas.height - newHeight) / 2 : 0;

        ctx.filter = 'blur(3px)';

        ctx.drawImage(bg, xOffset, yOffset, newWidth, newHeight);

        ctx.filter = 'blur(0)';

        ctx.fillStyle = '#020307';
        ctx.globalAlpha = 0.45;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 1.0;

        ctx.drawImage(logo, percent(50, canvas.width - (logo.width+10)), percent(5, canvas.height));
        ctx.fillStyle = '#FFFFFF';
        ctx.font = "900 40px Merriweather";
        ctx.fillText('Tolulope Olagunju', percent(50, canvas.width - ('Tolulope Olagunju'.length * 23)), percent(40, canvas.height));
        ctx.fillStyle = '#01D5A2';
        ctx.font = "400 40px Merriweather";
        ctx.fillText('Freelance Web Developer', percent(50, canvas.width - ('Freelance Web Developer'.length * 23)), percent(53, canvas.height));
        ctx.fillStyle = '#FFFFFF';
        ctx.font = "300 40px Merriweather";
        ctx.fillText('Based In NG', percent(50, canvas.width - ('Based In NG'.length * 23)), percent(66, canvas.height));

        // ctx.drawImage(logo, percent(50, canvas.width - (logo.width+10)), percent(5, canvas.height));
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(percent(80, canvas.width), percent(5, canvas.height), contact.width, contact.height);
        ctx.fillStyle = '#000000';
        ctx.font = "400 16px Merriweather";
        ctx.fillText('Contact Me', percent(80, canvas.width) + 5, percent(5, canvas.height) + (contact.height/2)+5);
        window.requestAnimationFrame(draw);
    }

    // Event listeners need to be outside the draw function to avoid repeated calling!

    canvas.addEventListener('mousemove', (e) => {
        if ((e.clientX > percent(80, canvas.width) && e.clientX < (percent(80, canvas.width) + contact.width)) && (e.clientY > percent(5, canvas.height) && e.clientY < percent(5, canvas.height) + contact.height)) {
            if (canvas.style.cursor === 'pointer') {
                return
            }
            canvas.style.cursor = 'pointer';
        } else {
            canvas.style.cursor = 'default';
        }
    })

    canvas.addEventListener('click', (e) => {
        e.preventDefault();
        if ((e.clientX > percent(80, canvas.width) && e.clientX < (percent(80, canvas.width) + contact.width)) && (e.clientY > percent(5, canvas.height) && e.clientY < percent(5, canvas.height) + contact.height)) {
            window.location.href = 'https://g.dev/tolu_olagunju';
        }
        return
    })

    draw();
})