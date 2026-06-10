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

export const avgTimes = (readings, timesPD) => {
  return readings.map((data) => {
    const total =
      (data.sugarB || 0) +
      (data.sugarL || 0) +
      (data.sugarD || 0) +
      (data.sugarBB || 0) +
      (data.sugarBed || 0);
    return timesPD ? parseFloat((total / timesPD).toFixed(2)) : 0;
  });
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
  let totalTimes = 0,
    totalTimes7 = 0,
    totalTimes14 = 0,
    totalTimes30 = 0,
    totalTimes60 = 0,
    totalTimes90 = 0,
    totalTimes120 = 0;

  if (readings && readings.length > 0) {
    const lastIdx = readings.length - 1;
    totalTimes +=
      (readings[lastIdx].sugarB || 0) +
      (readings[lastIdx].sugarL || 0) +
      (readings[lastIdx].sugarD || 0) +
      (readings[lastIdx].sugarBB || 0) +
      (readings[lastIdx].sugarBed || 0);

    const start7 = Math.max(0, readings.length - 7);
    for (let i = start7; i < readings.length; i++) {
      totalTimes7 +=
        (readings[i].sugarB || 0) +
        (readings[i].sugarL || 0) +
        (readings[i].sugarD || 0) +
        (readings[i].sugarBB || 0) +
        (readings[i].sugarBed || 0);
    }

    const start14 = Math.max(0, readings.length - 14);
    for (let i = start14; i < readings.length; i++) {
      totalTimes14 +=
        (readings[i].sugarB || 0) +
        (readings[i].sugarL || 0) +
        (readings[i].sugarD || 0) +
        (readings[i].sugarBB || 0) +
        (readings[i].sugarBed || 0);
    }

    const start30 = Math.max(0, readings.length - 30);
    for (let i = start30; i < readings.length; i++) {
      totalTimes30 +=
        (readings[i].sugarB || 0) +
        (readings[i].sugarL || 0) +
        (readings[i].sugarD || 0) +
        (readings[i].sugarBB || 0) +
        (readings[i].sugarBed || 0);
    }

    const start60 = Math.max(0, readings.length - 60);
    for (let i = start60; i < readings.length; i++) {
      totalTimes60 +=
        (readings[i].sugarB || 0) +
        (readings[i].sugarL || 0) +
        (readings[i].sugarD || 0) +
        (readings[i].sugarBB || 0) +
        (readings[i].sugarBed || 0);
    }

    const start90 = Math.max(0, readings.length - 90);
    for (let i = start90; i < readings.length; i++) {
      totalTimes90 +=
        (readings[i].sugarB || 0) +
        (readings[i].sugarL || 0) +
        (readings[i].sugarD || 0) +
        (readings[i].sugarBB || 0) +
        (readings[i].sugarBed || 0);
    }

    const start120 = Math.max(0, readings.length - 120);
    for (let i = start120; i < readings.length; i++) {
      totalTimes120 +=
        (readings[i].sugarB || 0) +
        (readings[i].sugarL || 0) +
        (readings[i].sugarD || 0) +
        (readings[i].sugarBB || 0) +
        (readings[i].sugarBed || 0);
    }
  }
  const Day1 = readings.map((data) => {
    return ((totalTimes / (timesPD * 1)) * rate).toFixed(2);
  });
  const Day7 = readings.map((data) => {
    return ((totalTimes7 / (timesPD * 7)) * rate).toFixed(2);
  });
  const Day14 = readings.map((data) => {
    return ((totalTimes14 / (timesPD * 14)) * rate).toFixed(2);
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
  const Day120 = readings.map((data) => {
    return ((totalTimes120 / (timesPD * 120)) * rate).toFixed(2);
  });
  return {
    totalTimes,
    Day1,
    totalTimes7,
    Day7,
    totalTimes14,
    Day14,
    totalTimes30,
    Day30,
    totalTimes60,
    Day60,
    totalTimes90,
    Day90,
    totalTimes120,
    Day120,
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
