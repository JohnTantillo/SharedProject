package tests

import org.scalatest._
import physics.Physics
import physics.PhysicsVector
import physics.PhysicalObject

class TestComputeLocation extends FunSuite{

  test( "DO IT"){

    val vector1: PhysicsVector = new PhysicsVector( 0.0, 0.0, 0.0 )
    val velocity1: PhysicsVector = new PhysicsVector( 1.0, 1.0, 1.0)
    val velocity2: PhysicsVector = new PhysicsVector( -1.0, -1.0, -1.0 )
    val object1: PhysicalObject = new PhysicalObject( vector1, velocity1 )
    val object2: PhysicalObject = new PhysicalObject( vector1, velocity2 )
    val dt1: Double = 5.0
    val dt2: Double = 0.0
    val dt3: Double = 3.0

    assert( compareObjects( Physics.computePotentialLocation( object1, dt1 ), new PhysicsVector( 5.0, 5.0, 5.0 )), "test1" )
    assert( compareObjects( Physics.computePotentialLocation( object1, dt2 ), new PhysicsVector( 0.0, 0.0, 0.0 )), "test2" )
    assert( compareObjects( Physics.computePotentialLocation( object2, dt3 ), new PhysicsVector( -3.0, -3.0, 0.0 )), "test3" )


  }

  def compareObjects( obj1: PhysicsVector, obj2: PhysicsVector ): Boolean ={
    obj1.x == obj2.x && obj1.y == obj2.y && obj1.z == obj2.z
  }

}