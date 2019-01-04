import React from 'react';
import { MdSearch } from "react-icons/md";
import { connect } from 'react-redux'
import { requestProduct } from '../redux/actions/product'

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state={
            text:''
        }
    }
    
    componentDidMount() {
        this.props.searchProduct('baju')
    }
  
    render() {
        return (
            <div style={{
                paddingTop: 8,
                paddingBottom: 8,
                backgroundColor: '#53c165',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position:'fixed',
                width:'100%',
                top:0,
                left:0,
                zIndex:999
            }}>
                <div style={{
                    width:'80%',
                    height: 16,
                    backgroundColor: '#f6f6f6',
                    borderRadius: 4,
                    display: 'flex',
                    padding: 8
                }}>
                    <MdSearch color='gray' />
                    <input style={{
                        borderStyle: 'none',
                        outline: 'none',
                        backgroundColor: 'transparent',
                        flex: 1,
                        marginLeft: 8,
                    }}
                        onChange={(event)=>{if(event.target.value.length!=0){this.props.searchProduct(event.target.value)}}}
                        placeholder='search your wishlist here'
                    />
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        product: state.product
    }
}
function mapDispatchToProps(dispatch) {
    return {
        searchProduct: (product) => {
            dispatch(requestProduct(product));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
