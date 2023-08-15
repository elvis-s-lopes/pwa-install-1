import { html } from 'lit';
import { msg } from '@lit/localize';

const template = (name: string, description: string, icon: string, install: any) => {
    return html`
        <div class="touch-header" id="touch-header"></div>
        <div class="body-header">
            <div class="icon">
                <img src="${icon}" alt="icon" class="icon-image">
            </div>
            <div class="about">
                <div class="name">
                    <label>${name}</label>
                </div>
                <div class="hostname">${location.hostname}</div>
            </div>
            <button class="material-button primary install" @click='${install}'>${msg('Install')}</button>
        </div>
        ${description ? html`<div class="description" style="display: flex;"><div>${description}</div><div style="width: 180px; margin-left:30px; text-align: center; font-size: 13px; white-space: nowrap;" class="hostname"><b><span id="stars_pp_reviews"></span></b> <svg xmlns="http://www.w3.org/2000/svg" height="9px" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg><br><span id="sum_pp_reviews"></span> avaliações</div></div>` : ''}
    `;
};
export default template;
