/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    
    let result  ="";
    
    for(let i = 0; i < address.length; i++){
        let char = address[i];
        
        if(char === ".")
            result += "[.]";
        
        else
            result += char
    }
    return result
};


/**
1.let result = ""; 빈배열추가
2. for문을 돌면서 address[0]를 char에 할당한다.
3. address[0]은 1이기 때문에 else문으로 내려가서 result = result + 1 --> result = "1"
4. 다시 for문으로 올라가서 address[1]은 .이기 때문에 if문에 해당에 된다.
5. result = "1" + "[.]" --> result = "1[.]"이된다.
6. 쭉쭉 for문을 돌면 출력값처럼 나온다
*/