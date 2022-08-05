import React, {Component} from "react";
import styles from './Collapse.module.css'
class Collapse extends Component {
    state = {
            open: false
    }

    togglePanel = () => {
        this.setState({open: !this.state.open})
    }

    render() {
        let {size} = this.props
        let elt;
        // Created Switch in order to provide in future various size like half, third, fourth ...
        switch (size) {
            case 'half':
                elt = styles.Half
                break;
            default:
                elt = ""
        }
        let open = this.state.open ? 'open' : 'closed';
        let eltStyle = `${styles.Collapse} ${elt} ${open} `;
        return (
            <div className={eltStyle}>
                <h2 onClick={(e)=>this.togglePanel(e)} className={styles.Header}>
                    {this.props.title}
                </h2>
                <div className={`${styles.Content} ${open}`}>
                    {this.props.children}
                </div>
            </div>);
    }
}

export default Collapse;
