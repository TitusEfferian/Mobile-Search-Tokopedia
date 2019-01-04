import React from 'react'

class Product extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', width: '50%',margin:8 }}>
                <img src={this.props.data.imageUrl} style={{maxHeight:'100%',width:'100%',borderRadius:4}}></img>
                <p style={{
                    fontWeight: '600',
                    color: 'rgba(0, 0, 0, 0.7)',
                    margin:0,
                    marginTop:8,
                    padding:0,
                }}>{this.props.data.name}</p>
                <p style={{ fontWeight: 600, color: "rgb(255, 87, 34)",margin:0,padding:0,marginTop:16,marginBottom:4 }}>
                    {this.props.data.price}
                </p>
                <p style={{
                    color:'rgba(0, 0, 0, 0.38',
                    fontSize:12,
                    margin:0,
                    padding:0,
                }}>
                    {this.props.data.shop.name}
                </p>
            </div>
        )
    }
}

export default Product