let address: any = {
    country : 'Korea',
    city : 'Seoul',
    address1 : 'Gangnam-Gu',
    address2 : 'Sinsa-dong 124-343',
    address3 : '789 street, 2 Floor ABC building'
}

const {country, city, ...detail} = address
console.log(detail)
console.log(detail.address1)