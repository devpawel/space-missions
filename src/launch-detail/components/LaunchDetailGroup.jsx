import React, { Component } from 'react';
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

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
        <ExpansionPanel defaultExpanded square={true}>
          <ExpansionPanelSummary expandIcon={<ExpandMore />}>
            <Typography variant="subtitle1">{this.props.header}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
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
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}
