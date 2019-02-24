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
                {data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td style={style.label}>{item.label}</td>
                      <td>{item.value}</td>
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
