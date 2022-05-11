import { Button, Input } from 'components/form';
import { Heading, Paragraph } from 'components/typography';
import React from 'react';
import { useForm } from 'react-hook-form';

const Subscribe = () => {
  const { control } = useForm({ mode: 'onChange' });
  return (
    <div className='py-[90px] flex flex-col items-center justify-center gap-y-[35px] text-center'>
      <Heading className='text-center before:left-1/2 before:-translate-x-1/2'>
        Subscribe our newsletter
      </Heading>
      <Paragraph className='max-w-[370px]'>
        Subscribe to our newsletter for daily/weekly update of our products and
        services.
      </Paragraph>
      <form className='flex items-center justify-center gap-x-[10px]'>
        <Input
          border='gradient'
          name='email'
          control={control}
          type='text'
          placeholder='EMAIL'
        />
        <Button type='submit'>DISCOVER</Button>
      </form>
    </div>
  );
};

export default Subscribe;
