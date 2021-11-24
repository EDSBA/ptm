import { Middleware } from "@reduxjs/toolkit";

export const throttleActionsMiddleware: Middleware = storeApi => next => action => {
    const currency: string = action.payload && action.payload.currency;
    if (currency==='CAD')
        return next(action);
    await fetch('https://api.npms.io/v2/search?q=react')
        .then(response => response.json())
        .then(data => this.setState({ totalReactPackages: data.total }));
}
