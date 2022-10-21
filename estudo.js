Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@erickace777 
AnA-JulIA-044
/
primeiroa_3t
Public
Code
Issues
Pull requests
Actions
Projects
Security
Insights
You’re making changes in a project you don’t have write access to. We’ve created a fork of this project for you to commit your proposed changes to. Submitting a change will write it to a new branch in your fork, so you can send a pull request.
primeiroa_3t
/
estudo.js
in
AnA-JulIA-044:main
 

Spaces

4

No wrap
1
let tabuada = 3;
2
let nome = "Jesus";
3
​
4
function escreva(){
5
    document.write("Tabuada do " + tabuada + "<br>")
6
    document.write(tabuada + " x 1 = "+(tabuada*1)+"<br>");
7
    document.write(tabuada + " x 2 = "+(tabuada*2)+"<br>");
8
    document.write(tabuada + " x 3 = "+(tabuada*3)+"<br>");
9
    document.write(tabuada + " x 4 = "+(tabuada*4)+"<br>");
10
    document.write(tabuada + " x 5 = "+(tabuada*5)+"<br>");
11
    document.write(tabuada + " x 6 = "+(tabuada*6)+"<br>");
12
    document.write(tabuada + " x 7 = "+(tabuada*7)+"<br>");
13
    document.write(tabuada + " x 8 = "+(tabuada*8)+"<br>");
14
    document.write(tabuada + " x 9 = "+(tabuada*9)+"<br>");
15
    document.write(tabuada + " x 10 = "+(tabuada*10)+"<br><br>");
16
    document.write("Feito por " + nome);
17
}
18
​
19
function minhaTabuada(){
20
    for(let i = 6; i <= 9; i++){
21
        document.write("Tabuada do " + i + "<br>");
22
        for(let j = 1; j <= 10; j++){
23
            document.write(i + " x " + j + " = "+(j*i)+"<br>");
24
        } 
25
        document.write("<br>");      
26
    }
27
}
28
​
29
function quadrado(){
30
    for(let i = 16; i <= 20; i++){
31
        document.write("O quadrado de " + i + " é " + (i*i)+ "<br>");
32
    }
33
}
34
​
35
function total(){
36
    let v = document.getElementById("valor").value;
37
    let j = document.getElementById("juros").value;
38
    if (Number (6)){
39
     alert("o valor do capital deve  ser numérico.");
40
     document.getElementById("valor").value = " ";
41
     document.getElementById("valor").focus = " ";
42
     return
43
     if (Number (6)){
44
        alert("o valor do capital deve  ser numérico.");
45
        document.getElementById("juros").value = " ";
@erickace777
Propose changes
Commit summary
Create estudo.js
Optional extended description
Add an optional extended description…
 
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
