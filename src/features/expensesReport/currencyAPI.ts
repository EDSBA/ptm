// A mock function to mimic making an async request for data
export function fetchExchange(currency) {
    return new Promise<{ data: number }>((resolve) =>
      await fetch(`
      http://api.exchangeratesapi.io/v1/convert?access_key=YOUR_ACCESS_KEY&from=${currency}&to=CAD&amount=25`)
        .then(response => response.json())
    );
  }
  