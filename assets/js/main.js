const cliNav = document.getElementById('cli-nav');

const PATHS = {
    '~': '/',
    'posts': '/posts',
    'posts/2020/10/nanopi-duo2-headless-setup': '/posts/2020/10/nanopi-duo2-headless-setup/',
};

const normalize = text => {
    return text.toLowerCase().trim().replace(/^(\/|\.)+|\/+$/g, '');
};

cliNav.value = '~'

cliNav.onkeydown = function(event) {
    const value = cliNav.value;
    if (event.key === 'Enter') {
        const path = normalize(value);
        window.location.href = PATHS[path] || '/';
    }
    if (event.key === 'Tab') {
        event.preventDefault();
        if (value.startsWith('./') || value.startsWith('~/')) {
            cliNav.value = '/posts';
        }
        const path = normalize(cliNav.value, true);
        if (path.startsWith('posts/')) {
            cliNav.value = '/posts/2020/10/nanopi-duo2-headless-setup';
        } else if (path.startsWith('p')) {
            cliNav.value = '/posts';
        }
    }
    if (event.ctrlKey && event.key === 'l') {
        cliNav.value = '~';
    }
}

