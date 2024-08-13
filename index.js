function countHypotenuse(){

    const lengthValue = document.getElementById('LengthValue').value
    const heigthValue = document.getElementById('HeightValue').value

    const hypotenuse = Math.sqrt(lengthValue*lengthValue + heigthValue*heigthValue);

    // const degree = (Math.asin(heigthValue/lengthValue)*180)/Math.PI
    const degree = (Math.atan(heigthValue / lengthValue) * 180) / Math.PI;

    console.log("degree " + degree)

    
    document.getElementById('pyth_result').innerText = hypotenuse;
}


function countCosSin(event){

    if(event.target.id == 'sinHeightValue'){
        const heigthValue = event.target.value
        console.log(event.target.value, " sin")
        const degreeValue = document.getElementById('degreeValue').value
        const lengthValue = heigthValue / Math.tan(degreeValue * Math.PI / 180);
        // const lengthValue = heightValue/Math.sin(degreeValue * Math.PI / 180.0)
        console.log(lengthValue, " sin")
        document.getElementById('cosLengthValue').value = lengthValue;
    }
    if(event.target.id == 'cosLengthValue'){
        const lengthValue = event.target.value
        console.log(event.target.value, " cos")
        const degreeValue = document.getElementById('degreeValue').value
        // const heightValue = lengthValue*Math.sin(degreeValue * Math.PI / 180.0)
        const heigthValue = lengthValue * Math.tan(degreeValue * Math.PI / 180);
        console.log(heigthValue, " cos")
        document.getElementById('sinHeightValue').value = heigthValue;
    }

    if(event.target.id == 'degreeValue'){
        const degreeValue = event.target.value
        const lengthValue = document.getElementById('cosLengthValue').value
        const heightValue = lengthValue*Math.sin(degreeValue * Math.PI / 180.0)
        document.getElementById('sinHeightValue').value = heightValue;
    }    
}


document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('HeightValue').addEventListener('input', countHypotenuse)
    document.getElementById('LengthValue').addEventListener('input', countHypotenuse)
    countHypotenuse();

    document.getElementById('sinHeightValue').addEventListener('input', countCosSin)
    document.getElementById('cosLengthValue').addEventListener('input', countCosSin)
    document.getElementById('degreeValue').addEventListener('input', countCosSin)
    countCosSin();
});

