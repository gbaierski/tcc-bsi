import { useDataStore } from '@/stores/dataStore';

export default async function (to, from, next) {
    if(to.name === 'layout1' || to.name === 'layout2')
        localStorage.setItem('passed-'+to.name, true);

    if(to.name === 'quiz') {
        const dataStore = useDataStore();
        dataStore.loadFromLocalStorage();
        
        if(!dataStore.layout1.stepCount || !dataStore.layout2.stepCount)
            next({name:'index'});
    }

    next();
}