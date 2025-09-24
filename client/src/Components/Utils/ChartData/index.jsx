export const backgroundColor = (A1C) => {
  return A1C >= Number(1.0) && A1C <= Number(5.6)
    ? "rgba(0,0,255,0.6)"
    : A1C >= Number(5.6) && A1C <= Number(6.5)
    ? "rgba(255,255,0,0.6)"
    : A1C >= Number(6.5) && A1C <= Number(7.5)
    ? "rgba(0,255,0,0.6)"
    : A1C >= Number(7.5) && A1C <= Number(8.5)
    ? "rgba(255,165,0,0.6)"
    : A1C >= Number(8.5)
    ? "rgba(255,0,0,0.6)"
    : "rgba(0,0,0,0.6)";
};

export const BGChartData = (readings) => {
  const dataSB = readings.map((data) => {
    return data.sugarB;
  });
  const dataSL = readings.map((data) => {
    return data.sugarL;
  });
  const dataSD = readings.map((data) => {
    return data.sugarD;
  });
  const dataSBB = readings.map((data) => {
    return data.sugarBB;
  });
  const dataSBed = readings.map((data) => {
    return data.sugarBed;
  });
  return { dataSB, dataSL, dataSD, dataSBB, dataSBed };
};

export const BPChartData = (bloodpressures) => {
  const dataHBP = bloodpressures.map((data) => {
    return data.hbp;
  });
  const dataLBP = bloodpressures.map((data) => {
    return data.lbp;
  });
  const dataHR = bloodpressures.map((data) => {
    return data.hr;
  });
  const dataHBP2 = bloodpressures.map((data) => {
    return data.hbp2;
  });
  const dataLBP2 = bloodpressures.map((data) => {
    return data.lbp2;
  });
  const dataHR2 = bloodpressures.map((data) => {
    return data.hr2;
  });
  return { dataHBP, dataLBP, dataHR, dataHBP2, dataLBP2, dataHR2 };
};

export const borderColor = (A1C) => {
  return A1C >= Number(1.0) && A1C <= Number(5.6)
    ? "rgba(0,0,255,1)"
    : A1C >= Number(5.6) && A1C <= Number(6.5)
    ? "rgba(255,255,0,1)"
    : A1C >= Number(6.5) && A1C <= Number(7.5)
    ? "rgba(0,255,0,1)"
    : A1C >= Number(7.5) && A1C <= Number(8.5)
    ? "rgba(255,165,0,1)"
    : A1C >= Number(8.5)
    ? "rgba(255,0,0,1)"
    : "rgba(0,0,0,1)";
};

export const colaberated = (readings, timesPD, rate) => {
  let A = 0,
    B = 0,
    C = 0,
    D = 0,
    E = 0,
    totalTimes = 0,
    totalTimes7 = 0,
    totalTimes30 = 0,
    totalTimes60 = 0,
    totalTimes90 = 0;

  for (A = readings.length - 1; A < readings.length; A++) {
    totalTimes +=
      readings[A].sugarB +
      readings[A].sugarL +
      readings[A].sugarD +
      readings[A].sugarBB +
      readings[A].sugarBed;
  }
  for (B = readings.length - 7; B < readings.length; B++) {
    totalTimes7 +=
      readings[B].sugarB +
      readings[B].sugarL +
      readings[B].sugarD +
      readings[B].sugarBB +
      readings[B].sugarBed;
  }
  for (C = readings.length - 30; C < readings.length; C++) {
    totalTimes30 +=
      readings[C].sugarB +
      readings[C].sugarL +
      readings[C].sugarD +
      readings[C].sugarBed +
      readings[C].sugarBed;
  }
  for (D = readings.length - 60; D < readings.length; D++) {
    totalTimes60 +=
      readings[D].sugarB +
      readings[D].sugarL +
      readings[D].sugarD +
      readings[D].sugarBB +
      readings[D].sugarBed;
  }
  for (E = readings.length - 90; E < readings.length; E++) {
    totalTimes90 +=
      readings[E].sugarB +
      readings[E].sugarL +
      readings[E].sugarD +
      readings[E].sugarBB +
      readings[E].sugarBed;
  }
  const Day1 = readings.map((data) => {
    return ((totalTimes / (timesPD * 1)) * rate).toFixed(2);
  });
  const Day7 = readings.map((data) => {
    return ((totalTimes7 / (timesPD * 7)) * rate).toFixed(2);
  });
  const Day30 = readings.map((data) => {
    return ((totalTimes30 / (timesPD * 30)) * rate).toFixed(2);
  });
  const Day60 = readings.map((data) => {
    return ((totalTimes60 / (timesPD * 60)) * rate).toFixed(2);
  });
  const Day90 = readings.map((data) => {
    return ((totalTimes90 / (timesPD * 90)) * rate).toFixed(2);
  });
  return {
    totalTimes,
    Day1,
    totalTimes7,
    Day7,
    totalTimes30,
    Day30,
    totalTimes60,
    Day60,
    totalTimes90,
    Day90,
  };
};

export const dataTimes = (readings, rate, timesPD) => {
  return readings.map((data) => {
    return readings.reduce(
      (Totaldata, readings) =>
        (Totaldata = parseFloat(
          (rate *
            (data.sugarB +
              data.sugarL +
              data.sugarD +
              data.sugarBB +
              data.sugarBed)) /
            timesPD,
          10
        ).toFixed(2)),
      0
    );
  });
};

export const colordataTimes = (readings, rate, timesPD) => {
  return readings.map((data) => {
    return readings.reduce(
      (Totaldata, readings) => (
        (Totaldata = parseFloat(
          (rate *
            (data.sugarB +
              data.sugarL +
              data.sugarD +
              data.sugarBB +
              data.sugarBed)) /
            timesPD,
          10
        )),
        Totaldata <= Number(5.6)
          ? "rgba(0,0,255,0.6)"
          : Totaldata >= Number(5.6) && Totaldata <= Number(6.5)
          ? "rgba(255,255,0,0.6)"
          : Totaldata >= Number(6.5) && Totaldata <= Number(7.5)
          ? "rgba(0,255,0,0.6)"
          : Totaldata >= Number(7.5) && Totaldata <= Number(8.5)
          ? "rgba(255,165,0,0.6)"
          : Totaldata >= Number(8.5)
          ? "rgba(255,0,0,0.6)"
          : "rgba(0,0,0,0.6)"
      ),
      0
    );
  });
};

export const borderdataTimes = (readings, rate, timesPD) => {
  return readings.map((data) => {
    return readings.reduce(
      (Totaldata, readings) => (
        (Totaldata = parseFloat(
          (rate *
            (data.sugarB +
              data.sugarL +
              data.sugarD +
              data.sugarBB +
              data.sugarBed)) /
            timesPD,
          10
        )),
        Totaldata <= Number(5.6)
          ? "rgba(0,0,255,1)"
          : Totaldata >= Number(5.6) && Totaldata <= Number(6.5)
          ? "rgba(255,255,0,1)"
          : Totaldata >= Number(6.5) && Totaldata <= Number(7.5)
          ? "rgba(0,255,0,1)"
          : Totaldata >= Number(7.5) && Totaldata <= Number(8.5)
          ? "rgba(255,165,0,1)"
          : Totaldata >= Number(8.5)
          ? "rgba(255,0,0,1)"
          : "rgba(0,0,0,1)"
      ),
      0
    );
  });
};
