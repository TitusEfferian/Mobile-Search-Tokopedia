import React from 'react';
import { MdSearch } from "react-icons/md";
class Header extends React.PureComponent {
    render() {
        return (
            <div style={{
                paddingTop:8,
                paddingBottom:8,
                paddingLeft:24,
                paddingRight:24,
                backgroundColor: '#53c165',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
            }}>
               <div style={{
                   flex:1,
                   height:16,
                   backgroundColor:'#f6f6f6',
                   borderRadius:4,
                   display:'flex',
                   padding:8
               }}>
                <MdSearch color='gray'/>
                <input style={{
                    borderStyle:'none',
                    outline:'none',
                    backgroundColor:'transparent',
                    flex:1,
                    marginLeft:8,
                }}
                placeholder='search your wishlist here'
                />
               </div>
            </div>
        );
    }
}

export default Header;
