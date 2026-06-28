// საკლასო დავალება:

// თქვენს კოდში დატოვეთ returnPromise ფუნქცია, უბრალოდ მოგიწევთ asyncFunc-ის გადაკეთება: გამოიყენეთ promise.all და გადაეცით მასივი, სადაც თქვენს returnPromise-ს სამჯერ გამოიძახებთ. მიღებული შედეგი ისევ ცვლადში შეინახეთ და უბრალოდ დაბეჭდეთ ის კონსოლში.

function returnPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello");
    }, 1000);
  });
}

async function asyncFunc() {
  const result = await Promise.all([
    returnPromise(),
    returnPromise(),
    returnPromise()
  ]);

  console.log(result);
}

asyncFunc();
