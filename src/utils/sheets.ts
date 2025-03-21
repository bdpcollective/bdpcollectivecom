export interface NebraskaFootballData {
  year: number;
  conference: string;
  totalWins: number;
  totalLosses: number;
  totalTies: number;
  winPercentage: number;
  conferenceWins: number;
  conferenceLosses: number;
  conferenceTies: number;
  conferenceWinPercentage: number;
  srs: number | null;
  sos: number | null;
  apPre: number | null;
  apHigh: number | null;
  apPost: number | null;
  cfpHigh: number | null;
  cfpFinal: number | null;
  coach: string;
  bowl: string | null;
}

export interface AllTimeData {
  year: number;
  conference: string;
  totalWins: number;
  totalLosses: number;
  totalTies: number;
  winPercentage: number;
  conferenceWins: number;
  conferenceLosses: number;
  conferenceTies: number;
  conferenceWinPercentage: number;
  srs: number | null;
  sos: number | null;
  apPre: number | null;
  apHigh: number | null;
  apPost: number | null;
  cfpHigh: number | null;
  cfpFinal: number | null;
  coach: string;
  bowl: string | null;
}

export interface YearData {
  year: number;
  data: {
    [key: string]: any;
  };
}

export interface PlayerStats {
  name: string;
  year: number;
  passingYards: number | null;
  passingTouchdowns: number | null;
  passingAttempts: number | null;
  passingCompletions: number | null;
  completionPercentage: number | null;
  passingEfficiency: number | null;
  interceptionsThrown: number | null;
  rushingYards: number | null;
  rushingAttempts: number | null;
  rushingTouchdowns: number | null;
  yardsPerRush: number | null;
  receivingYards: number | null;
  receptions: number | null;
  receivingTouchdowns: number | null;
  yardsPerReception: number | null;
  totalTouchdowns: number | null;
  totalYards: number | null;
}

export async function fetchNebraskaFootballData(): Promise<{
  allTime: AllTimeData[];
  byYear: { [key: string]: YearData };
  playerStats: PlayerStats[];
}> {
  const SHEET_ID = '1tCvBJDKr8EZ-djK2BRJc9R1RHYt1-4x7r28hGyw0zmA';
  const SHEETS = ['All Time', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];
  
  try {
    // Fetch all time data
    const allTimeResponse = await fetch(
      `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=All Time&range=A3:U100`
    );
    
    if (!allTimeResponse.ok) {
      throw new Error('Failed to fetch all time data');
    }

    const allTimeCsv = await allTimeResponse.text();
    const allTimeRows = allTimeCsv.split('\n').map(row => row.split(',').map(cell => cell.replace(/"/g, '')));
    
    const allTime = allTimeRows
      .map(row => {
        const parseNumber = (value: string): number | null => {
          const parsed = parseFloat(value);
          return isNaN(parsed) ? null : parsed;
        };

        return {
          year: parseInt(row[1]) || 0,
          conference: row[2] || '',
          totalWins: parseInt(row[3]) || 0,
          totalLosses: parseInt(row[4]) || 0,
          totalTies: parseInt(row[5]) || 0,
          winPercentage: parseNumber(row[6]) || 0,
          conferenceWins: parseInt(row[7]) || 0,
          conferenceLosses: parseInt(row[8]) || 0,
          conferenceTies: parseInt(row[9]) || 0,
          conferenceWinPercentage: parseNumber(row[10]) || 0,
          srs: parseNumber(row[11]),
          sos: parseNumber(row[12]),
          apPre: row[13] ? parseInt(row[13]) : null,
          apHigh: row[14] ? parseInt(row[14]) : null,
          apPost: row[15] ? parseInt(row[15]) : null,
          cfpHigh: row[16] ? parseInt(row[16]) : null,
          cfpFinal: row[17] ? parseInt(row[17]) : null,
          coach: row[18] || '',
          bowl: row[19] || null
        };
      })
      .filter(row => row.year > 0);

    // Fetch individual year data
    const byYear: { [key: string]: YearData } = {};
    
    for (const year of SHEETS.slice(1)) {
      const yearResponse = await fetch(
        `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${year}&range=A1:Z100`
      );
      
      if (yearResponse.ok) {
        const yearCsv = await yearResponse.text();
        const yearRows = yearCsv.split('\n').map(row => row.split(',').map(cell => cell.replace(/"/g, '')));
        
        // Process year-specific data
        const yearData: { [key: string]: any } = {};
        // Add year-specific data processing here based on the structure of each year's sheet
        
        byYear[year] = {
          year: parseInt(year),
          data: yearData
        };
      }
    }

    // Fetch player stats data
    const playerStatsResponse = await fetch(
      `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=Player Stats&range=A2:T1000`
    );
    
    if (!playerStatsResponse.ok) {
      throw new Error('Failed to fetch player stats data');
    }

    const playerStatsCsv = await playerStatsResponse.text();
    const playerStatsRows = playerStatsCsv.split('\n').map(row => row.split(',').map(cell => cell.replace(/"/g, '')));
    
    const playerStats = playerStatsRows
      .filter(row => row.length > 1 && row[0]) // Filter out empty rows
      .map(row => {
        const parseNumber = (value: string): number | null => {
          if (!value || value.trim() === '') return null;
          const parsed = parseFloat(value);
          return isNaN(parsed) ? null : parsed;
        };

        return {
          name: row[0] || '',
          year: parseInt(row[1]) || 0,
          passingYards: parseNumber(row[2]),
          passingTouchdowns: parseNumber(row[3]),
          passingAttempts: parseNumber(row[4]),
          passingCompletions: parseNumber(row[5]),
          completionPercentage: parseNumber(row[6]),
          passingEfficiency: parseNumber(row[7]),
          interceptionsThrown: parseNumber(row[8]),
          rushingYards: parseNumber(row[9]),
          rushingAttempts: parseNumber(row[10]),
          rushingTouchdowns: parseNumber(row[11]),
          yardsPerRush: parseNumber(row[12]),
          receivingYards: parseNumber(row[13]),
          receptions: parseNumber(row[14]),
          receivingTouchdowns: parseNumber(row[15]),
          yardsPerReception: parseNumber(row[16]),
          totalTouchdowns: parseNumber(row[17]),
          totalYards: parseNumber(row[18])
        };
      })
      .filter(player => player.year > 0);

    return {
      allTime,
      byYear,
      playerStats
    };
  } catch (error) {
    console.error('Error fetching Nebraska football data:', error);
    throw error;
  }
} 