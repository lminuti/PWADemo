import './person-element.js';

window.addEventListener('load', () => {
    fetchPersonnel();
    registerSW();
});

async function fetchPersonnel() {
    const res = await fetch('api/people.json');
    const json = await res.json();

    const main = document.querySelector('main');

    json.forEach(person => {
        const el = document.createElement('person-element');
        el.person = person;
        main.appendChild(el);
    });
}

async function registerSW() {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('./sw.js');
        } catch(e) {
            console.log('Registrazione fallita');
        }
    }
}

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    let deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
    const addBtn = document.querySelector('.ad2hs-prompt');
    addBtn.style.display = 'block';

    // Uncaught (in promise) DOMException: The prompt() method must be called with a user gesture
    //deferredPrompt.prompt();

    addBtn.addEventListener('click', async (e) => {
    // hide our user interface that shows our A2HS button
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt

        const choiceResult = await deferredPrompt.userChoice;
        addBtn.style.display = 'none';
        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
        } else {
            console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
    });
}, {once: true});
