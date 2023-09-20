function getInputField(e) {
    const inputField = document.getElementById(e);
    return inputField;
}


// Text Bold Function
function textBold() {
    const inputField = getInputField('input-text');
    if (inputField.style.fontWeight ==='bold') {
        inputField.style.fontWeight='normal';
    }
    
    else{
        inputField.style.fontWeight ='bold';
    }
}

// Text Style Italic By Click Event

document.getElementById('font-italic').addEventListener('click',function(){
    const inputField = getInputField('input-text');
    if (inputField.style.fontStyle ==='italic') {
        inputField.style.fontStyle='normal';
    }
    
    else{
        inputField.style.fontStyle ='italic';
    }
})

// Text Decoration Underline Function 

document.getElementById('text-underline').addEventListener('click',function(){
    const inputField = getInputField('input-text');
    if(inputField.style.textDecoration ==='underline'){
        inputField.style.textDecoration='none';
    }
    else{
        inputField.style.textDecoration='underline';
    }
})

// Text Align Left Function

function alignLeft() {
    const inputField = document.getElementById('input-text');
    inputField.style.textAlign='left';
    
}

// Text Align Center Function

function alignCenter() {
    const inputField = document.getElementById('input-text');
    inputField.style.textAlign='center';
    
}

// Text Align Right Function

function alignRight() {
    const inputField = document.getElementById('input-text');
    inputField.style.textAlign='right';
    
}

// Text Color Function

const colorPicker = document.getElementById("color-picker");
const textarea = document.getElementById("input-text");

    colorPicker.addEventListener("input", function () {
    textarea.style.color = colorPicker.value;
    });

// Font Size Function

const fontSizeInput = document.getElementById("font-size-input");

const inputText = document.getElementById("input-text");

        fontSizeInput.addEventListener("input", function () {
        const fontSize = fontSizeInput.value;
        inputText.style.fontSize = `${fontSize}px`;
    });