import { del, get, post, put } from './api.js';

const endpoints = {
    'market': '/data/cyberpunk?sortBy=_createdOn%20desc',
    'itemById': '/data/cyberpunk/',
    'items': '/data/cyberpunk',
};

export async function getAllItems() {
    return get(endpoints.market);
}

export async function getItemById(id) {
    return get(endpoints.itemById + id);
}

export async function createItem(item, imageUrl, price, availability, type, description) {
    return post(endpoints.items, {
        item,
        imageUrl,
        price,
        availability,
        type,
        description
    });
}

export async function updateItem(id, itemData) {
    return put(endpoints.itemById + id, itemData);
}

export async function deleteItem(id) {
    return del(endpoints.itemById + id);
}
