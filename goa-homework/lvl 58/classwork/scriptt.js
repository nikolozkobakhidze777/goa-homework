// საკლასო დავალება:

// შექმენით ფუნქცია სახელად compareNums. ფუნქციაში მომხარებელს შემოატანინეთ ორი რიცხვი და ისინი ცვლადებში შეინახეთ number მონაცემთა ტიპში.

// თუ პირველი რიცხვი მეტია მეორეზე, დაბეჭდეთ პირველი. თუ მეორე მეტია პირველზე, დაბეჭდეთ მეორე. სხვა შემთხვევაში დაბეჭდეთ "Numbers are equal"

function compareNums() {
    let firstnum = Number(prompt("შეიყვანეთ პირველი რიცხვი:"));
    let secondnum = Number(prompt("შეიყვანეთ მეორე რიცხვი:"));

if (firstnum > secondnum) {
    console.log("პირველი რიცხვი მეტია:", firstnum);
}

else if (secondnum > firstnum) {
    console.log("მეორე რიცხვი მეტია:", secondnum);
}

else {
    console.log("რიცხვები თანაბარია");
}
}