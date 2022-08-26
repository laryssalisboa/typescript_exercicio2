let list: number[] = [1, 2, 3];

let otherList: Array<number> = [1, 2, 3];

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Array declaration</h1>
<h2>list: ${List}</h2>
<h2>other list: ${otherList}</h2>
`;

let me: [string, number];

me = ['Laryssa', 20];

const appDiv: HTMLElement = document.getElementById('app.tuple');
appDiv.innerHTML = `
<h1>Tuple</h1>
<h2>Me chamo ${me[0]} e tenho ${me[1]} anos. </h2>
`;


enum Color {Red, Green, Blue};
let color1: Color = Color.Green;

enum ColorWithRef {Red=10, Green=20, Blue=30}
let color2: ColorWithRef = ColorWithRef.Blue;

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Enumerated types</h1>
<h2>Cor 1: ${color1}</h2>
<h2>Cor 2: ${color2}</h2>
`;


let notSure: any = 4;
notSure = "Maybe I am a string";
notSure = false; //okay, definitely a boolean

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Any variable</h1>
<h2>${notSure}</h2>
`;

function warnUser(): void {
  console.log("This is my warning message");
}

let myfunction: void = warnUser();

let unusable: void = undefined;
unusable = null;

myfunction;

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Void</h1>
<h2>unusable: ${unusable}</h2>
<h2>myfunction: ${myfunction}</h2>
`;

declare function create(o: object | null): void
create({ prop: 0}); // OK
create(null); //OK
create(42); // ERRO
create("string"); //ERRO
create(false); //ERRO
create(undefined); //ERRO

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Object</h1>
`;