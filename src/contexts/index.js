import React from 'react'
import ObservableStore from '../providers/Store'

export const store = {
    activityStore: new ObservableStore()
}

export const storesContext = React.createContext(store);
