import * as _ from 'lodash';
import './styles.css'

// const cellWidth = 8;
// const cellHeight = 10;

var cellBg = '#000'

const cell = {
    width: 8,
    height: 10,
    rowWidth: (document.documentElement.scrollWidth / 8) | 0,
    columnHeight: (document.documentElement.scrollHeight / 10) | 0,
}

const draw = () => {
    for (var i = 0; i < (cell.rowWidth * cell.columnHeight); i++) {
        var block = document.createElement('div');
        block.style.width = cell.width.toString();
        block.style.height = cell.height.toString();
        block.style.backgroundColor = cellBg;
        document.body.appendChild(block)
    }
}

document.body.append();