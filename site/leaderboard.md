---
title: Leaderboard
---

# Top 10 solutions


## Jordin

```javascript
function mapCharValue(ch) {
    if (ch >= 48 && ch <= 57) {
        return ch - 48;
    }

    return ch;
}

function adidas_microchallenge_1(input) {
    let str = "";

    for (let i = 0; i < input.length; i++) {
        let ch = mapCharValue(input.charCodeAt(i));
        let order = input.length - i - 1;

        console.log(order + " " + ch);

        if (order == 0) {
            str += ch;
        } else if (order == 1) {
            str += ch * ch;
        } else if (order == 2) {
            str += ch.toString(2);
        } else if (order == 3) {
            str += Math.floor(ch / 2);
        } else if (order == 4) {
            str += ch.toString(8);
        } else if (order == 5) {
            str += "abcdefghij".charAt(ch % 10);
        } else {
            str += "_";
        }
    }

    let result = new Buffer(str).toString("base64");

    console.log(str + " " + result);

    return result;
}
```

## \#2

```javascript
function adidas_microchallenge_1(input) {
    var stack = [];

    for(var i = input.length-1; i >= 0; i--){
        var elem = input[i];

        if((input.charCodeAt(i) < 48) || (input.charCodeAt(i) > 57))
            elem = elem.charCodeAt(0)
        else
            elem = parseInt(elem)

        switch(input.length-i-1){
            case 0:
                stack.unshift(elem)
                break;

            case 1:
                stack.unshift(elem*elem)
                break;

            case 2:
                stack.unshift(elem.toString(2))
                break;

            case 3:
                stack.unshift(Math.floor(elem/2))
                break;

            case 4:
                stack.unshift(elem.toString(8))
                break;

            case 5:
                stack.unshift(String.fromCharCode((elem%10)+97))
                break;
        }
    }
    var output = stack.join("");

    return Buffer.from(output).toString("base64")
}
```

## musicbot

```javascript
function adidas_microchallenge_1(input) {
    let codearr = [];
    for (var i = 0; i < input.length; i++) {
        isNaN(input[i]) || input[i] == " " ? codearr.push(input.charCodeAt(i)) : codearr.push(Number(input[i]))
    }
    //1 is kept
    //2 is squared
    //3 is binary representation
    //4 is Math.floor(x/2)
    //5 is octal
    //6 last char , ceaser cipher left shifted 1
    let joinarr = [];
    codearr.reverse().forEach((val, index)=>{
        switch(index){
            case 0:
                joinarr.unshift(val.toString())
                break;
            case 1:
                joinarr.unshift(Math.pow(val,2).toString())
                break;
            case 2:
                joinarr.unshift((val >>> 0).toString(2))
                break;
            case 3:
                joinarr.unshift(Math.floor(val/2).toString())
                break;
            case 4:
                joinarr.unshift((val >>> 0).toString(8))
                break;
            case 5:
                let foo = val.toString();
                joinarr.unshift(String.fromCharCode((val%10)+97))
                // joinarr.unshift("abcdefghjiklmnopqrstuvwxyz".charAt(Number(Number(foo[foo.length-1]).toString(9))))
                break;
        }
    })

    return new Buffer(joinarr.join("")).toString('base64');
}
```

## @GeckoSquadron

```python
import base64
import math
import string

def adidas_microchallenge_1(inp):
    # All the Ascii characters except for strings
    letters = list(string.printable[10:])
    alphabet = list("abcdefghijklmnopqrstuvwxyz")

    # Change all letters to their ascii values
    tmp = []
    for let in inp:
        if let in letters:
            tmp.append(int(ord(let)))
        else:
            tmp.append(int(let))
    inp = tmp

    # We will say this is a numerical problem
    # For now, we just return it b64 encoded
    if len(inp) == 1:
        # If the length is just the mode, then fine - just return it
        inp = str(inp[0])
        return base64.b64encode(inp.encode("utf-8")).decode("utf-8")
    # Haven't tested beyond length 2 yet but assume this
    elif len(inp) == 2:
        # We need to square the first number, and append the rest
        squaredMode = (int(inp[0]) ** 2)
        toEncode = str(squaredMode) + str(inp[len(inp) - 1])
        return base64.b64encode(toEncode.encode("utf-8")).decode("utf-8")
    # Here its the same as above, but we prepend the binary representation of the first
    # number
    elif len(inp) == 3:
        binaryPrefix = bin(int(inp[0]))[2:]
        squaredMode = (int(inp[1]) ** 2)
        toEncode = str(binaryPrefix) + str(squaredMode) + str(inp[len(inp) - 1])
        return base64.b64encode(toEncode.encode("utf-8")).decode("utf-8")
    elif len(inp) == 4:
        flooring = math.floor(int(inp[0]) / 2)
        binaryPrefix = bin(int(inp[1]))[2:]
        squaredMode = (int(inp[2]) ** 2)
        toEncode = str(flooring) + str(binaryPrefix) + str(squaredMode) + str(inp[len(inp) - 1])
        return base64.b64encode(toEncode.encode("utf-8")).decode("utf-8")
    # Here we need the octet representation of inp[0]
    elif len(inp) == 5:
        octet = oct(int(inp[0]))[2:]
        flooring = math.floor(int(inp[1]) / 2)
        binaryPrefix = bin(int(inp[2]))[2:]
        squaredMode = (int(inp[3]) ** 2)
        toEncode = str(octet) + str(flooring) + str(binaryPrefix) + str(squaredMode) + str(inp[len(inp) - 1])
        return base64.b64encode(toEncode.encode("utf-8")).decode("utf-8")
    # Here we add it to the alphabet
    elif len(inp) == 6:
        letterIndex = int(inp[0])
        if letterIndex > 25:
            strRep = str(letterIndex)
            letterIndex = int(strRep[len(strRep) - 1])
        letter = alphabet[letterIndex]
        octet = oct(int(inp[1]))[2:]
        flooring = math.floor(int(inp[2]) / 2)
        binaryPrefix = bin(int(inp[3]))[2:]
        squaredMode = (int(inp[4]) ** 2)
        toEncode = str(letter) + str(octet) + str(flooring) + str(binaryPrefix) + str(squaredMode) + str(inp[len(inp) - 1])
        return base64.b64encode(toEncode.encode("utf-8")).decode("utf-8")
```

## KamiCY

```python
import base64

letterarr = 'abcdefghijklmnopqrstuvwxyz'
def adidas_microchallenge_1(input):
    indexcount = 0
    input = input[::-1]
    newstring = ""
    for letter in input:
        try:
            int(letter)
            isstring = False
        except:
            isstring = True

        if indexcount == 0:
            if isstring:
                letter = str(ord(letter))
            newstring += letter[::-1]
        elif indexcount == 1:
            if isstring:
                letter = str(ord(letter))
            newstring += str(int(letter) ** 2)[::-1]
        elif indexcount == 2:
            if isstring:
                newstring += str(int(''.join(format(ord(letter), '08b'))))[::-1]
            else:
                newstring += bin(int(letter))[2:][::-1]

        elif indexcount == 3:
            if isstring:
                letter = ord(letter)
            letter = int(letter)
            if letter % 2 != 0:
                letter = letter - 1
            newstring += str(int(letter/2))[::-1]
        elif indexcount == 4:
            if isstring:
                letter = ord(letter)

            letter = int(letter)
            x = int(letter/8)

            if isstring:
                newstring +=  str((letter + x * 2) + 20)[::-1]
            else:
                newstring +=  str(letter + x * 2)[::-1]
        elif indexcount == 5:
            print(ord(letter))
            if isstring:
                if letter.isupper():
                    letter = ord(letter) - 60
                else:
                    letter = ord(letter) - 90
            x = int(letter)
            while x > 9:
                x -= 10
            newstring += letterarr[x]

        else:
            pass
        indexcount += 1
    return base64.b64encode(newstring[::-1].encode('ascii')).decode('utf-8')
```

## \_Ach3r\_

```python
import base64

def adidas_microchallenge_1(input):
    return_value = ""


    if len(input) <= 6:

        aux_str = ""

        for i in range(1, len(input) + 1):
            if i == 1:
                if input[-1].isdigit() == True:
                    aux_str = input[-1]
                else:
                    aux_str = str(ord(input[-1]))

            if i == 2:
                if input[-2].isdigit() == True:
                    aux_str =  str(int(input[-2])**2) + aux_str
                else:
                    aux_str =  str(ord(input[-2])**2) + aux_str

            if i == 3:
                if input[-3].isdigit() == True:
                    aux_str = "{0:b}".format(int(input[-3])) + aux_str
                else:
                    aux_str = "{0:b}".format(ord(input[-3])) + aux_str
            if i == 4:
                if input[-4].isdigit() == True:
                    aux_str = str(int(input[-4])//2) + aux_str
                else:
                    aux_str = str(ord(input[-4])//2) + aux_str

            if i == 5:
                if input[-5].isdigit() == True:
                    aux_str =  oct(int(input[-5]))[2:] + aux_str
                else:
                    aux_str = oct(ord(input[-5]))[2:] + aux_str

            if i == 6:
                if input[-6].isdigit() == True:
                    aux_str = chr(int(input[-6]) + 97)  + aux_str
                else:
                    aux_str = chr((ord(input[-6]) % 10) + 97)  + aux_str

        print(aux_str)
        result = base64.b64encode(aux_str.encode('ascii'))
        return_value = result.decode('ascii')

    return return_value
```

## nerodesu017

```javascript
let letterMap = {
    's': 'f',
    'w': 'j',
    'm': 'j',
    'h': 'e',
    'q': 'd',
    'r': 'e',
    'a': 'h'
}

function tobase64(input){
    return Buffer.from(input).toString("base64");
}

function frombase64(input){
    return Buffer.from(input, "base64").toString("ascii");
}

function hexToDec(hexNum){
    return parseInt(hexNum, 16);
}

function octToDec(octNum){
    return parseInt(hexNum, 8);
}

function decToOct(decNum){
    return decNum.toString(8);
}

function hexToOct(hexNum){
    let dec = hexToDec(hexNum);
    return dec.toString(8);
}

function decToBin(decNum){
    return parseInt(decNum.toString(2));
}

function alphaOrDigit(char){
    if(char >= 48 && char <= 57)return 'd';
    if((char >= 65 && char <= 90) || (char >= 97 && char <= 122))return 'a';
    return 'n/a';
}

function adidas_microchallenge_1(input) {
    if(input.length === 1){
        let char = input.charCodeAt(0);
        if(char >= 48 && char <= 57) return tobase64(input)
        if((char >= 65 && char <= 90) || (char >= 97 && char <= 122)) return tobase64(parseInt(char).toString());
        return tobase64(String(input.charCodeAt(0)));
        // return tobase64(input);
    }
    else if(input.length === 2){
        switch(alphaOrDigit(input.charCodeAt(0))){

            case 'd':
                return tobase64((parseInt(input[0])*parseInt(input[0])) + frombase64(adidas_microchallenge_1(input.slice(1))));
            case 'n/a':
            case 'a':
                return tobase64(parseInt(input[0].charCodeAt(0))*parseInt(input[0].charCodeAt(0))+frombase64(adidas_microchallenge_1(input.slice(1))));
            break;
            default:
                console.log(alphaOrDigit((input)))
        }

    } else if(input.length === 3){
        let binary;
        switch(alphaOrDigit((input.charCodeAt(0)))){

            case 'd':
                binary = decToBin(parseInt(input[0]));
                return tobase64(binary + frombase64(adidas_microchallenge_1(input.slice(1))));
            case 'n/a':
            case 'a':
                binary = decToBin(parseInt(input[0].charCodeAt(0)));
                return tobase64(binary + frombase64(adidas_microchallenge_1(input.slice(1))));
        }
        // let binary = decToBin(parseInt(input[0]));
        return tobase64(binary + frombase64(adidas_microchallenge_1(input.slice(1))));
    } else if (input.length === 4){
        let halved;
        switch(alphaOrDigit((input.charCodeAt(0)))){

            case 'd':
                halved = Math.floor(parseInt(input[0]) / 2);
                return tobase64(halved + frombase64(adidas_microchallenge_1(input.slice(1))));
            case 'n/a':
            case 'a':
                halved = Math.floor(parseInt(input[0].charCodeAt(0)) / 2);
                return tobase64(halved + frombase64(adidas_microchallenge_1(input.slice(1))));
        }
    } else if (input.length === 5){
        let oct;
        switch(alphaOrDigit((input.charCodeAt(0)))){

            case 'd':
                oct = decToOct(parseInt(input[0]));
                return tobase64(oct + frombase64(adidas_microchallenge_1((input.slice(1)))));
            case 'n/a':
            case 'a':
                oct = decToOct(parseInt(input[0].charCodeAt(0)));
                return tobase64(oct + frombase64(adidas_microchallenge_1((input.slice(1)))));
        }
    } else if(input.length === 6) {
        let toLetter;
        switch(alphaOrDigit((input.charCodeAt(0)))){

            case 'd':
                toLetter = String.fromCharCode(input[0].charCodeAt(0) - 48 + 97);
                return tobase64(toLetter + frombase64(adidas_microchallenge_1((input.slice(1)))));
            case 'n/a':
            case 'a':
                toLetter = letterMap[input[0]];
                return tobase64(toLetter + frombase64(adidas_microchallenge_1((input.slice(1)))));
        }
    }
    return Buffer.from(input).toString("base64");
}
```

## SneakyFish5

```javascript
const intToLetterMap = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
    8: "i",
    9: "j"
}

const letterToLetterMap = {
    "a": "h",
    "b": "i",
    "c": "j",
    "d": "a",
    "e": "b",
    "f": "c",
    "g": "d",
    "h": "e",
    "i": "f",
    "j": "g",
    "k": "h",
    "l": "i",
    "m": "j",
    "n": "a",
    "o": "b",
    "p": "c",
    "q": "d",
    "r": "e",
    "s": "f",
    "t": "g",
    "u": "h",
    "v": "i",
    "w": "j",
    "x": "a",
    "y": "b",
    "z": "c",
}

function adidas_microchallenge_1(input) {
    let finalStr = ""
    let pos = 0
    for (let i = input.length; i !== 0; i--) {
        const char = input.charAt(i - 1)
        const isNum = !isNaN(parseInt(char)) && !isNaN(char)
        const number = isNum ? parseInt(char) : char.charCodeAt()
        console.log(pos)

        if (pos === 0) {
            // On the first round, simply add the number
            finalStr = number + finalStr
        } else if (pos === 1) {
            // On the second round, square the number
            finalStr = (number * number) + finalStr
        } else if (pos === 2) {
            // On the third round, do number.toString(2)
            finalStr = number.toString(2) + finalStr
        } else if (pos === 3) {
            // On the fourth round, divide the number by 2
            // If the number is odd, subtract by 1 to make it even
            if (number % 2 !== 0) {
                finalStr = ((number - 1) / 2) + finalStr
            } else {
                finalStr = (number / 2) + finalStr
            }
        } else if (pos === 4) {
            // On the fifth round, do number.toString(8)
            // But really only applies for 8 and 9
            finalStr = number.toString(8) + finalStr
        } else {
            // On the sixth and final round, append the letter
            // in the alphabet equal to the number using the letterMap
            if (isNum) {
                finalStr = intToLetterMap[number] + finalStr
            } else {
                finalStr = letterToLetterMap[char] + finalStr
            }
        }
        pos++
    }
    return Buffer.from(finalStr).toString("base64")
}
```

## programadorayanes

```python
import base64
def adidas_microchallenge_1(input):
    i0, i1, i2, i3, i4, i5 = input[-1], "", "", "", "", ""
    if (not i0.isdigit()):
            i0 = str(ord(i0))
    if len(input)>=2:
        value = input[-2]
        if (not value.isdigit()):
            value = ord(value)
        i1= str(int(value)**2)
    if len(input) >= 3:
        value = input[-3]
        if (not value.isdigit()):
            value = ord(value)
        i2= str(bin(int(value)))[2:]

    if len(input) >= 4:
        value = input[-4]
        if (not value.isdigit()):
            value = ord(value)
        i3= str(int(value)//2)

    if len(input) >= 5:
        value = input[-5]
        if (not value.isdigit()):
            value = ord(value)
        i4= str(oct(int(value))[2:])
    if len(input)>=6:
        value = input[-6]
        if (not value.isdigit()):
            value = ord(value)
        i5= str(chr(int(str(value)[-1])+97))
    finalinput = i5 + i4 + i3 + i2 + i1 + i0
    message_bytes = finalinput.encode('ascii')
    base64_bytes = base64.b64encode(message_bytes)
    base64_message = base64_bytes.decode('ascii')
    return base64_message
```

## Copbud

```javascript
function adidas_microchallenge_1(input) {
    const output = input.split("").reverse().map((char, index, allChars) => {
        const isNumber = char != " " && Number.isInteger(Number(char)) // SPACE
        const charCode = isNumber ? Number(char) : char.charCodeAt()
        switch (index) {
            case 0:
                return charCode
            case 1:
                return charCode * charCode
            case 2:
                // binary
                return charCode.toString(2)
            case 3:
                return Math.floor(charCode / 2)
            case 4:
                if (charCode == 9) return "11" // sorry
                if (char == "H") return "110" // sorry
                if (isNumber) return charCode
                if (charCode <= 100) return charCode + 44
                if (charCode < 112) return charCode + 46
                return charCode + 48
            case 5:
                const alphabet = "abcdefghijklmnopqrstuvwxyz"
                if (isNumber) return alphabet[charCode]
                if (char == "a") return "h" // sorry, again

                const aIndex = alphabet.indexOf(char)
                const offset = aIndex > 12 ? -13 : -3
                return alphabet[alphabet.indexOf(char) + offset]
        }
    }).map(String).reverse().join("")

    return Buffer.from(output).toString("base64")
}
```

# Original solutions

```javascript
function adidas_microchallenge_1(input) {
  const values = `${ input }`.split('').reverse();

  const str = values.map((value, index) => {
    let _value = parseInt(value, 10);

    if (isNaN(_value)) {
      _value = value.charCodeAt(0);
    }

    switch(index % 6) {
      case 0: return _value;
      case 1: return (_value * _value);
      case 2: return _value.toString(2);
      case 3: return Math.floor(_value / 2);
      case 4: return _value.toString(8);
      case 5: return 'abcdefghij'[_value % 10];
    }
  }, []).reverse().join('');

  return Buffer.from(str).toString('base64');
}
```

```python
import re
import math
import base64

def asIs(v):
  return v

def pow(v):
  return v * v

def toBinary(v):
  return bin(v)[2:]

def divide(v):
  return math.floor(v / 2)

def toOctal(v):
  return oct(v)[2:]

def toChar(v):
  return 'abcdefghij'[v % 10]

def adidas_microchallenge_1(input: str):
  values = list(input)

  values.reverse()

  cases = {
    0: asIs,
    1: pow,
    2: toBinary,
    3: divide,
    4: toOctal,
    5: toChar
  }

  def map_fn(tup):
    index, value = tup

    if re.match('\d', value):
      value = int(value)
    else:
      value = ord(value)

    return str(cases.get(index % 6)(value))

  values = list(map(map_fn, enumerate(values)))

  values.reverse()

  values = ''.join(values)

  return base64.b64encode(bytes(values, 'utf-8')).decode()
```

```go
import (
	"encoding/base64"
	"math"
	"regexp"
	"strings"
)

var NUMBER_REGEX = regexp.MustCompile(`\d`)

func reverse(arr []string) []string {
	result := make([]string, 0, len(arr))

	for i := len(arr) - 1; i >= -0; i-- {
		result = append(result, arr[i])
	}

	return result
}

func adidas_microchallenge_1(input string) string {
	chars := strings.Split(input, "")

	values := make([]string, len(chars))

	for index, value := range reverse(chars) {
		_value, err := strconv.ParseInt(value, 10, 64)
		if err != nil {
			_value = int64([]rune(value)[0])
		}

		switch index % 6 {
		case 0:
			values[index] = fmt.Sprint(_value)
		case 1:
			values[index] = fmt.Sprint(_value * _value)
		case 2:
			values[index] = strconv.FormatInt(_value, 2)
		case 3:
			values[index] = fmt.Sprint(math.Floor(float64(_value) / 2))
		case 4:
			values[index] = strconv.FormatInt(_value, 8)
		case 5:
			values[index] = string([]rune("abcdefghij")[_value%10])
		}
	}

	result := strings.Join(reverse(values), "")

	return base64.StdEncoding.EncodeToString([]byte(result))
}
```

```swift
func adidas_microchallenge_1(input: String) -> String {
    let chars = Array("abcdefghij")
    let values = Array(input).reversed()

    let mapped = values.enumerated().map({ (index, value) -> String in
        let _value = UInt32(String(value)) ?? UInt32(value.asciiValue ?? 0)

        switch index % 6 {
            case 0:
                return String(_value)
            case 1:
                return String(_value * _value)
            case 2:
                return String(_value, radix: 2)
            case 3:
                return String(Int(_value / 2))
            case 4:
                return String(_value, radix: 8)
            case 5:
                return String(chars[Int(_value) % 10])
            default:
                return String(_value)
            }
    })

    return mapped.reversed().joined().data(using: .utf8)?.base64EncodedString() ?? ""
}
```