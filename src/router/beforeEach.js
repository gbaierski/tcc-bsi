export default async function (to, from, next) {
    if(to.name === 'layout1' || to.name === 'layout2')
        localStorage.setItem('passed-'+to.name, true);

    if(to.name === 'quiz') {
        let passedLayout1Validation = localStorage.getItem('passed-layout1');
        let passedLayout2Validation = localStorage.getItem('passed-layout2');
        
        if(!passedLayout1Validation || !passedLayout2Validation) {
            next({name:'index'});
        }
    }

    next();
}