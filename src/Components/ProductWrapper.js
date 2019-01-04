import React from 'react'
import { connect } from 'react-redux'
import Product from './Product';
import { ActivityIndicator, FlatList } from 'react-native-web'
class ProductWrapper extends React.Component {
    render() {
        if (this.props.product.isFetching || this.props.product.data == undefined) {
            return (
                <ActivityIndicator style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} size='large'>loading</ActivityIndicator>
            )
        }
        return (
            <div style={{ marginTop: 48 }}>
                <FlatList
                    data={this.props.product.data.result[0].data.searchProduct.products}
                    renderItem={({ item }) => <Product data={item} />}
                    numColumns={2}
                />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        product: state.product
    }
}
export default connect(mapStateToProps)(ProductWrapper)