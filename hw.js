class RunTracker{
    constructor(name,emil)
    {
        this.name= name
        this.emil = emil
        this.run =[]
    }
    addRun(date,time,distance)
    {
        this.run.push({date:date, time:time, distance:distance})
    }
    totalDistance()
    {
        let total = this.run.reduce((prev, curr) => prev.distance + curr.distance)
        console.log(total)
        return total;
    }
    longestDistance()
    {
        let longest = this.run.reduce((prev, curr) => prev.distance > curr.distance ? prev.distance : curr.distance)
        console.log(longest)
        return longest;
    } 
    averageSpeed()
    {
        let totalDist= this.run.reduce((prev,curr)=>prev.distance+curr.distance)
        let totalTime = this.run.reduce((prev,curr)=>prev.time+curr.time)
        let avg = totalDist / totalTime
        console.log(avg)
        return avg;
    }
}
const runner = new RunTracker("Salman", "Salman@salman.com");
runner.addRun("2017-01-01", 10, 30)
runner.addRun("2017-01-02", 5, 20)
runner.totalDistance() 
runner.longestDistance() 
runner.averageSpeed() 