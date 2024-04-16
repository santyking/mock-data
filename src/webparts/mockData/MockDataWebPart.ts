import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

// import styles from './MockDataWebPart.module.scss';

export interface IMockDataWebPartProps {
}

export default class MockDataWebPart extends BaseClientSideWebPart<IMockDataWebPartProps> {
  public render(): void {
    this.domElement.innerHTML = 
    `
    <div>
      <h2>Hello Santosh</h2>
    </div>
    `;
  }

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
