import * as React from 'react';
import styles from './Calendar.module.scss';
import { ICalendarProps } from './ICalendarProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DefaultButton, IIconProps, Label, Link, CommandBarButton } from 'office-ui-fabric-react'
import './Calendar.css'
export default class Calendar extends React.Component<ICalendarProps, {}> {
  public render(): React.ReactElement<ICalendarProps> {
    const addIcon: IIconProps = { iconName: 'Add' };
    return (
      <div className={styles.calendar}>
        <div className={styles.container}>
          <div className='header'>
            <div className='top_header'>
              <Label> {this.props.description}</Label>
              <Link>すべて表示</Link>




            </div>
            <div className='header_btn'>
              <CommandBarButton iconProps={addIcon} text="イベントの追加" />
            </div>
          </div>
          <div className='content'>
            <div className="group">
              <div className="left">
                <Label>10月1日</Label>
                <hr />
                <Label>10月25日</Label>
              </div>
              <div className="right">
                <Label>2020年度年末賞与 賞与DC拠出希望額の申告</Label>
                <Label>について(10月25日締切)</Label>
                <Label>10月1日(木) 8:00</Label>
              </div>
            </div>
            <div className="group">
              <div className="left">
                <Label>10月1日</Label>
                <hr />
                <Label>10月16日</Label>
              </div>
              <div className="right">
                <Label>サイボウズからOutlookへの移行のお願い </Label>
                <Label>【10/16まで】</Label>
                <Label>10月1日(木) 終日</Label>
              </div>
            </div>
            <div className="group">
              <div className="left">
                <Label>10月1日</Label>
                <hr />
                <Label>10月25日</Label>
              </div>
              <div className="right">
                <Label>Windows10バージョンアップ (FU1909適用)実</Label>
                <Label>施のお願い</Label>
                <Label>10月16日(金)8:00
</Label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
