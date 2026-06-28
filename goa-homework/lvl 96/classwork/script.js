// საკლასო დავალება:

// შეადგინეთ კომპონენტი, სადაც გექნებათ ასეთი სტრუქტურა:

const Component = () => {
    const myList = ["Dashboard", "Home", "Components", "Calendar", "Charts", "Documents"]

    return (
        <div>
            <h2>Codewhithrandom</h2>
            <ul>
                {
                    myList.map((element,i) => (
                        <li key={i}>{element}</li>
                    ))
                }
            </ul>
        </div>
    )
}

