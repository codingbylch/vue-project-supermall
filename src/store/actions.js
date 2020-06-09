import {
    ADD_COUNTER,
    ADD_TO_CART
} from './mutation-types';

export default {
    addCart(context, payload) {
        // 添加新商品
        let oldProduct = null;
        for (let item of context.state.cartList) {
            if (item.iid === payload.iid) {
                oldProduct = item;
            }
        }
        if (oldProduct) {
            context.commit(ADD_COUNTER, oldProduct)
        } else {
            payload.count = 1
            // context.state.cartList.push(payload)
            context.commit(ADD_TO_CART, payload)
        }

    }
}