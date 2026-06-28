// საკლასო დავალება:

// თქვენს ცვლადში შექმენით მრავალხაზიანი jsx-ის ელემენტი, სადაც გექნებათ როგორც container, ასევე self-closing თეგები. ასევე სადმე გამოიყენეთ className ატრიბუტი. ამას გარდა, რომელიმე ელემენტის ტექსტი უნდა იყოს გამოსახულების ან ცვლადის მნიშვნელობა, ამიტომ გამოიყენეთ კლაკნილი ფრჩხილები.

const myarr = (
    <section>
        <h1>GOA</h1>
        <p>I Study in GOA, Best academy in the world.</p>
        <br id="br1" />
        <img className="img1" />

        <p>5 + 5</p>
        <p>Output: "5 + 5"</p>

        <p>{5 + 5}</p>
        <p>Output: 10</p>

    </section>
);