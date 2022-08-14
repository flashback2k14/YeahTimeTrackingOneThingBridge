import fetch from 'node-fetch';
import oneThing from 'one-thing';
import 'dotenv/config';

const headers = {
  'X-AUTH-TOKEN': process.env.AUTH_TOKEN,
  'Content-Type': 'application/json',
};

try {
  console.log('starting...');

  const res = await fetch(`${process.env.URL}${process.env.ROUTE}`, { headers });
  const { active_tasks } = await res.json();

  if ((active_tasks?.length ?? -1) > 0) {
    await oneThing(active_tasks.join(','));
  } else {
    console.log('no active tasks found.');
    await oneThing('carpe diam');
  }

  console.log('finished');
} catch (error) {
  console.error(error);
}
