import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import CheckBox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import {
  carbRatio,
  slidingScale1,
  slidingScale2a,
  slidingScale2b,
  slidingScale3a,
  slidingScale3b,
  slidingScale4a,
  slidingScale4b,
  slidingScale5,
  timesPD,
  typInsulin,
} from './Preferences/Preference';

export default class Preferences extends Component {
  constructor(props) {
    super(props);
    this.state = {
      save: props.handleSavePreferences,
      edit: props.handleEditPreferences,
    };
  }

  render() {
    return (
      <div style={{ backgroundColor: 'white' }}>
        {(this.props.timesPD === 1 && this.props.chkBP) ||
        (this.props.timesPD === 2 && this.props.chkBP) ? (
          <h3 style={{ color: 'black' }}>Blood Pressure Tracking</h3>
        ) : (this.props.timesPD === 1 && !this.props.chkBP) ||
          (this.props.timesPD === 2 && !this.props.chkBP) ? (
          <h3 style={{ color: 'black' }}>Blood Sugar Tracking</h3>
        ) : (
          <h3 style={{ color: 'black' }}>Tracking Options</h3>
        )}
        <TextField
          name='timesPD'
          select
          label='Times Per Day'
          value={this.props.timesPD}
          onChange={this.props.handlePreference}
          helperText='Please select your times Per Day'
        >
          {timesPD.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        {this.props.timesPD === 2 ? (
          <div>
            <CheckBox
              name='chkBP'
              checked={this.props.chkBP}
              disabled={false}
              onChange={this.props.handlePreference}
            />
            <label style={{ color: 'black' }} htmlFor='chkBloodPressure'>
              Blood Pressure
            </label>
          </div>
        ) : this.props.timesPD === 1 ? (
          <div>
            <CheckBox
              name='chkBP'
              checked={this.props.chkBP}
              disabled={false}
              onChange={this.props.handlePreference}
            />
            <label style={{ color: 'black' }} htmlFor='chkBloodPressure'>
              Blood Pressure
            </label>
          </div>
        ) : (
          <div>
            <div>
              <CheckBox
                name='chkNutrition'
                checked={this.props.chkNutrition}
                disabled={false}
                onChange={this.props.handlePreference}
              />
              <label style={{ color: 'black' }} htmlFor='chkNutrition'>
                Count Carbs
              </label>
            </div>
            {this.props.chkNutrition ? (
              <div>
                <CheckBox
                  name='chkMeds'
                  checked={this.props.chkMeds}
                  disabled={false}
                  onChange={this.props.handlePreference}
                />
                <label style={{ color: 'black' }} htmlFor='chkMeds'>
                  Take Meds
                </label>
              </div>
            ) : (
              ''
            )}
            {this.props.chkMeds ? (
              <div>
                <CheckBox
                  name='chkMedsB'
                  checked={this.props.chkMedsB}
                  disabled={false}
                  onChange={this.props.handlePreference}
                />
                <label style={{ color: 'black' }} htmlFor='chkMedsB'>
                  AM Meds
                </label>
                <CheckBox
                  name='chkMedsL'
                  checked={this.props.chkMedsL}
                  disabled={false}
                  onChange={this.props.handlePreference}
                />
                <label style={{ color: 'black' }} htmlFor='chkMedsL'>
                  Noon Meds
                </label>
                <CheckBox
                  name='chkMedsD'
                  checked={this.props.chkMedsD}
                  disabled={false}
                  onChange={this.props.handlePreference}
                />
                <label style={{ color: 'black' }} htmlFor='chkMedsD'>
                  Evening Meds
                </label>
                <CheckBox
                  name='chkMedsBed'
                  checked={this.props.chkMedsBed}
                  disabled={false}
                  onChange={this.props.handlePreference}
                />
                <label style={{ color: 'black' }} htmlFor='chkMedsBed'>
                  Bed Meds
                </label>
              </div>
            ) : (
              ''
            )}
            {this.props.chkNutrition ? (
              <div>
                <CheckBox
                  name='chkInsulin'
                  checked={this.props.chkInsulin}
                  disabled={false}
                  onChange={this.props.handlePreference}
                />
                <label style={{ color: 'black' }} htmlFor='chkInsulin'>
                  Take Insulin
                </label>
              </div>
            ) : (
              ''
            )}
            {this.props.chkInsulin ? (
              <div>
                <TextField
                  name='typInsulin'
                  select
                  label='Types of Insulin'
                  value={this.props.typInsulin}
                  disabled={false}
                  onChange={this.props.handlePreference}
                  helperText='Please select how many types of insulin'
                >
                  {typInsulin.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            ) : (
              ''
            )}
            {this.props.typInsulin === 1 || this.props.typInsulin === 2 ? (
              <div>
                <CheckBox
                  name='chkBP'
                  checked={this.props.chkBP}
                  disabled={false}
                  onChange={this.props.handlePreference}
                />
                <label style={{ color: 'black' }} htmlFor='chkBloodPressure'>
                  Blood Pressure (2X max)
                </label>
              </div>
            ) : (
              ''
            )}
            {this.props.chkBP ? (
              <div>
                <CheckBox
                  name='chkSlidingScale'
                  checked={this.props.chkSlidingScale}
                  disabled={false}
                  onChange={this.props.handlePreference}
                />
                <label style={{ color: 'black' }} htmlFor='chkSliddingScale'>
                  Sliding Scale
                </label>
              </div>
            ) : (
              ''
            )}
            {this.props.chkSlidingScale ? (
              <div>
                <div>
                  <TextField
                    name='slidingScale1'
                    select
                    label='Starting Slliding Scale'
                    value={this.props.slidingScale1}
                    disabled={false}
                    onChange={this.props.handlePreference}
                    helperText='Please enter the amount of sugar to start sliding scale'
                  >
                    {slidingScale1.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div>
                  <TextField
                    name='slidingScale2a'
                    select
                    label='Sliding Scale'
                    value={this.props.slidingScale2a}
                    disabled={false}
                    onChange={this.props.handlePreference}
                    helperText='Please enter the amount of sugar to start sliding scale'
                  >
                    {slidingScale2a.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    name='slidingScale2b'
                    select
                    label='Sliding Scale'
                    value={this.props.slidingScale2b}
                    disabled={false}
                    onChange={this.props.handlePreference}
                    helperText='Please enter the amount of sugar to start sliding scale'
                  >
                    {slidingScale2b.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div>
                  <TextField
                    name='slidingScale3a'
                    select
                    label='Sliding Scale'
                    value={this.props.slidingScale3a}
                    disabled={false}
                    onChange={this.props.handlePreference}
                    helperText='Please enter the amount of sugar to start sliding scale'
                  >
                    {slidingScale3a.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    name='slidingScale3b'
                    select
                    label='Sliding Scale'
                    value={this.props.slidingScale3b}
                    disabled={false}
                    onChange={this.props.handlePreference}
                    helperText='Please enter the amount of sugar to start sliding scale'
                  >
                    {slidingScale3b.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div>
                  <TextField
                    name='slidingScale4a'
                    select
                    label='Sliding Scale'
                    value={this.props.slidingScale4a}
                    disabled={false}
                    onChange={this.props.handlePreference}
                    helperText='Please enter the amount of sugar to start sliding scale'
                  >
                    {slidingScale4a.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    name='slidingScale4b'
                    select
                    label='Sliding Scale'
                    value={this.props.slidingScale4b}
                    disabled={false}
                    onChange={this.props.handlePreference}
                    helperText='Please enter the amount of sugar to start sliding scale'
                  >
                    {slidingScale4b.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div>
                  <TextField
                    name='slidingScale5'
                    select
                    label='Sliding Scale'
                    value={this.props.slidingScale5}
                    disabled={false}
                    onChange={this.props.handlePreference}
                    helperText='Please enter the amount of sugar to start sliding scale'
                  >
                    {slidingScale5.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <TextField
                  name='carbRatio'
                  select
                  label='Carb Ratio'
                  value={this.props.carbRatio}
                  disabled={false}
                  onChange={this.props.handlePreference}
                  helperText='Please enter how many carbs to 1 unit of insulin'
                >
                  {carbRatio.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            ) : (
              ''
            )}
          </div>
        )}
        <div>
          <Button
            style={{ backgroundColor: 'cyan', borderRadius: '50px' }}
            variant='contained'
            onClick={this.state.edit}
          >
            Edit
          </Button>
        </div>
      </div>
    );
  }
}
