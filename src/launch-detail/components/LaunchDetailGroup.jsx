import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

const style = {
  label: {
    textAlign: 'right',
    paddingRight: '1rem'
  }
};

export default class dataDetailGroup extends Component {
  render() {
    const data = this.props.data;
    return (
      <div>
        <Typography variant="subtitle1">{this.props.header}</Typography>

        <hr />

        <table>
          <tbody>
            {data.map(item => {
              return (
                <tr key={item.label}>
                  <td style={style.label}>
                    <Typography>{item.label}</Typography>
                  </td>
                  <td>
                    <Typography>{item.value}</Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
