const buttonRibua= document.querySelector('#buttonRibua')
const ribua = document.querySelector('#ribua')
buttonRibua.textContent = 'הצג ריבוע'

buttonRibua.addEventListener('click',function(){
    // buttonRibua.style.display = 'block'
    // buttonRibua.style.color = 'red'
    if(ribua.style.display == 'block'){

        ribua.style.display == 'none'
    }
    else{
        ribua.style.display == 'block'
    }
    
})
const inputuser = document.querySelector('#inputuser')
const url = ('https://randomuser.me')


async function fetchName(){
    fetch(url)
    .then(resp => resp.json())
    .then(date => {
         displayName(date.result)
        console.log(date);
    })
    
    
}
console.log(fetchName());

function displayName(users)
{
    inputuser.textContent='';
    users.forEach(user => {
        inputuser.textContent=(user.date);

    });
}
    
