import React from 'react';

const WorkoutSessions = () => {
  return (
    <section className='workout_session'>
      <div className='wrapper'>
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        Warm up with dynamic stretches and cardio, then do strength training with push-ups, shoulder presses, rows, squats, lunges, and deadlifts, finishing with planks, bicycle crunches, and leg raises.
        </p>
        <img src='./img5.jpg' alt='workout'></img>
      </div>
      <div className='wrapper'>
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Bootcamp workout sessions offer a comprehensive fitness experience, blending dynamic warm-ups, high-intensity strength training, and core exercises for a full-body challenge.
        </p>
        <div className='bootcamps'>
          <div>
            <h4>Ultimate Bootcamp Workout: Full-Body Fitness Challenge</h4>
            <p>
              Bootcamp workout sessions combine dynamic warm-ups, intense strength training (push-ups, squats, lunges), and core exercises (planks, crunches) for a full-body challenge.
            </p>
          </div>
          <div>
            <h4>Power Bootcamp Workout: Transform Your Body</h4>
            <p>
              Power Bootcamp sessions integrate vigorous warm-ups, targeted strength routines (deadlifts, rows, shoulder presses), and core-focused moves (leg raises, bicycle crunches) to sculpt and strengthen your entire body.
            </p>
          </div>
          <div>
            <h4>Intensity Bootcamp Workout: Push Your Limits</h4>
            <p>
              Intensity Bootcamp challenges you with a mix of dynamic stretching, high-intensity strength circuits (burpees, kettlebell swings, pull-ups), and core exercises (Russian twists, mountain climbers) for an all-encompassing workout.
            </p>
          </div>
          <div>
            <h4>Total Body Bootcamp Workout: Achieve Peak Fitness</h4>
            <p>
              Total Body Bootcamp sessions feature comprehensive warm-ups, diverse strength training (bench presses, lunges, tricep dips), and core exercises (flutter kicks, plank variations) designed to push your fitness to the next level.
            </p>
          </div>
          <div>
            <h4>Extreme Bootcamp Workout: Maximize Your Workout</h4>
            <p>
              Extreme Bootcamp sessions deliver a high-energy experience with dynamic warm-ups, powerful strength training (clean and press, goblet squats, push-ups), and core drills (sit-ups, hanging leg raises) to elevate your fitness regimen.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkoutSessions;