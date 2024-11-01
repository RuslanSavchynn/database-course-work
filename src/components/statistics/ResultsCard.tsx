'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Award, Trophy } from 'lucide-react';
import { useTheme } from 'next-themes';

type Props = {
    accuracy: number,
}

const ResultsCard = ({ accuracy }: Props) => {
    const { theme, systemTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <Card className='md:col-span-7'>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-7'>
                <CardTitle className='text-2xl font-bold'>Results</CardTitle>
                <Award />
            </CardHeader>
            <CardContent className='flex flex-col items-center justify-center h-3/5'>
                {accuracy > 75 ? (
                    <>
                        <Trophy className='mr-4' stroke='gold' size={50} />
                        <div className={`flex flex-col text-2xl font-semibold ${currentTheme === 'dark' ? 'text-white' : 'text-black'}`}>
                            <span>Impressive!</span>
                            <span className='text-sm text-center'>
                                {"> 75% accuracy"}
                            </span>
                        </div>
                    </>
                ) : accuracy > 25 ? (

                    <>
                        <Trophy className='mr-4' stroke='silver' size={50} />
                        <div className={`flex flex-col text-2xl font-semibold ${currentTheme === 'dark' ? 'text-white' : 'text-black'}`}>
                            <span>Good Job!</span>
                            <span className='text-sm text-center'>
                                {"> 25% accuracy"}
                            </span>
                        </div>
                    </>

                ) : (


                    <>
                        <Trophy className='mr-4' stroke='#cd7f32' size={50} />
                        <div className={`flex flex-col text-2xl font-semibold ${currentTheme === 'dark' ? 'text-white' : 'text-black'}`}>
                            <span>Nice Try!</span>
                            <span className='text-sm text-center'>
                                {"> 0% accuracy"}
                            </span>
                        </div>
                    </>

                )}
            </CardContent>
        </Card>
    )
}

export default ResultsCard;