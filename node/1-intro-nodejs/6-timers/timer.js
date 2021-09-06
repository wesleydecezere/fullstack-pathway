const interval = setInterval(() => console.log('oi'), 1000)

setTimeout(() => clearInterval(interval), 5001)