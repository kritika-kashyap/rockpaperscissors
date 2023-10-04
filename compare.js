export function compare(input = '', sinput = ''){
    if(input == sinput){
        return null;
    }
    else{
        if(input == 'rock'){
            return (sinput == 'scissors');
        }
        else if(input == 'paper'){
            return (sinput == 'rock');
        }
        else{
            return (sinput == 'paper');
        }
    }
}