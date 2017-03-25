
class GaugeControl 
{
    private _gaugedata: GaugeControlData[];

    public FillChart(data: GaugeControlData[])
    {
        this._gaugedata = data;
    }
    

}


export interface GaugeControlData 
{
    label: string;
    value: number;

}





                // ['Label', 'Value'],
                // ['CPU', 1500],
                // ['Memory', 80],
                // ['Usage', 30]