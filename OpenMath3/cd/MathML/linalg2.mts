<?xml version="1.0" encoding="utf-8"?>
<mcd>
  <MMLdefinition id="cds_vector" cdrole="application" arity="nary" container="yes">
    <name>vector</name>
    <description>
      <p>A vector is an ordered n-tuple of values representing an element of an
      n-dimensional vector space.  The "values" are all from the same ring, typically real
      or complex.  Where orientation is important, such as for pre or post multiplication
      by a matrix a vector is treated as if it were a column vector and its transpose is
      treated a row vector.  The type attribute can be used to explicitly specify that a
      vector is a "row" vector.  See CRC Standard Mathematical Tables and Formulae,
      editor: Dan Zwillinger, CRC Press Inc., 1996, [2.4]</p>
    </description>

    <discussion>
      <p><el>vector</el> is the container element for a vector. The child elements form
      the components of the vector.</p>

      <p>For purposes of interaction with matrices and matrix multiplication, vectors are
      regarded as equivalent to a matrix consisting of a single column, and the transpose
      of a vector behaves the same as a matrix consisting of a single row. Note that
      vectors may be rendered either as a single column or row.</p>

      <p>In general a vector can be constructed by providing a function and a
      1-dimensional domain of application.  The entries of the vector correspond to the
      values obtained by evaluating the function at the points of the domain.  The
      qualifications defined by a <el>domainofapplication</el> element can also be
      abbreviated in several ways including a <el>condition</el> placed on a bound
      variable and an expression involving that variable.</p>

      <p>The <el>vector</el> element constructs vectors from an <var>n</var>-dimensional
      vector space so that its <var>n</var> child elements typically represent real or
      complex valued scalars as in the three-element vector

<eg role = "mathml"><![CDATA[<vector>
  <apply><plus/><ci>x</ci><ci>y</ci></apply>
  <cn>3</cn>
  <cn>7</cn>
</vector>]]></eg></p>

<p>A vector can also be constructed by evaluating a function over a specific domain
       of application, each evaluation corresponding to an entry in the vector.  In its
       most general form a domain is explicitly specified by a
       <el>domainofapplication</el> element and a function. Optionally the
       <el>domainofapplication</el> can be augmented by a <el>bvar</el> element and an
       algebraic expression expressed in terms of it.  Qualifications defined by a
       <el>domainofapplication</el> element can be abbreviated in several ways as
       described in <specref ref="contm_qualifiers"/>.</p>
	</discussion>
        <classification> constructor </classification>
        <MMLattribute>
          <attname> type </attname>
          <attvalue>  row | column | MathMLType </attvalue>
          <attdefault> column </attdefault>
        </MMLattribute>
	<rendering>
	  <graphic role="display" source="image/f4108.gif" alt="\left(\begin{array}{c} 1 \\ 2 \\ 3 \\ x \end{array} \right)"/>
	  <p>(1, 2, 3, 
	  <var>x</var>)</p>
	</rendering>
	<optype>ncontainer</optype>
        <signature>(real*) -> vector(type=real)</signature>
        <signature>[type=vectortype]((anything)*) -> vector(type=vectortype)</signature>
        <signature> (domainofapp,function) -> vector </signature>
        <signature> (bvar+,domainofapp,anything) -> vector </signature>
        <property>
	  <description><p>vector=column_vector</p></description>
        </property>
        <property>
          <description><p>matrix * vector = vector</p></description>
        </property>
        <property>
          <description><p>matrix * column_vector = column_ vector</p></description>
        </property>
        <property>
          <description><p>row_vector*matrix  = row_vector</p></description>
        </property>
        <property>
          <description><p>transpose(vector) = row_vector</p></description>
        </property>
        <property>
          <description><p>transpose(column_vector) = row_vector</p></description>
        </property>
        <property>
          <description><p>transpose(row_vector) = column_vector</p></description>
        </property>
        <property>
          <description><p>distributive over scalars</p></description>
        </property>
        <property>
          <description><p>associativity.</p></description>
        </property>
        <property>
          <description><p>Matrix * column vector</p></description>
	</property>
        <property>
          <description><p>row vector * Matrix</p></description></property>
        <MMLexample>
	  <![CDATA[<vector><cn>1</cn><cn>2</cn><cn>3</cn><ci>x</ci></vector>]]>
	</MMLexample>

        <MMLexample role="mathml-fragment">
	  <![CDATA[<vector type="row"><cn>1</cn><cn>2</cn><cn>3</cn><ci>x</ci></vector>]]>
	</MMLexample>
        <MMLexample role="mathml-fragment"><![CDATA[<vector>
  <bvar><ci type="integer">i</ci></bvar>
  <lowlimit><ci>1</ci></lowlimit>
  <uplimit><ci>10</ci></uplimit>
  <apply><power/>
    <ci>x</ci>
    <ci>i</ci>
  </apply>
</vector>]]></MMLexample>
      </MMLdefinition>
	  <MMLdefinition id="cds_matrix"  cdrole="application" arity="nary" container="yes">
        <name>matrix</name>
        <description>
          <p>This is the constructor for a matrix.  It requires matrixrow's as arguments.
          It is used to represent matrices.  See CRC Standard Mathematical Tables and
          Formulae, editor: Dan Zwillinger, CRC Press Inc., 1996, [2.5.1].</p>
        </description>
	<discussion>
	  <p>The <el>matrix</el> element is the container element for matrix rows, which
	  are represented by <el>matrixrow</el>. The <el>matrixrow</el>s contain the
	  elements of a matrix.</p>
	  
	  <p>In general a matrix can be constructed by providing a function and a
	  2-dimensional domain of application.  The entries of the matrix correspond to
	  the values obtained by evaluating the function at the points of the domain.  The
	  qualifications defined by a <el>domainofapplication</el> element can also be
	  abbreviated in several ways including a <el>condition</el> element placing
	  constraints directly on bound variables and an expression in those variables.</p>
	  <p>The <el>matrix</el> element is used to represent mathematical matrices. It
	  has zero or more child elements, all of which are <el>matrixrow</el>
	  elements. These in turn expect zero or more child elements that evaluate to
	  algebraic expressions or numbers. These sub-elements are often real numbers, or
	  symbols as in

<eg role = "mathml"><![CDATA[<matrix>
  <matrixrow> <cn> 1 </cn> <cn> 2 </cn> </matrixrow>
  <matrixrow> <cn> 3 </cn> <cn> 4 </cn> </matrixrow>
</matrix>]]></eg>

        The <el>matrixrow</el> elements must always be contained inside of a matrix, and
        all rows in a given matrix must have the same number of elements.</p>

	<p>Note that the behavior of the <el>matrix</el> and <el>matrixrow</el> elements
	is substantially different from the <el>mtable</el> and <el>mtr</el> presentation
	elements.</p>

	<p>A matrix can also be constructed by evaluating a bivariate function over a
	specific domain of application, each evaluation corresponding to an entry in the
	matrix.  In its most general form a domain of application is explicitly specified
	by a <el>domainofapplication</el> element and a function which when evaluated at
	points of the domain produces entries in the matrix. Optionally the
	<el>domainofapplication</el> can be augmented by <el>bvar</el> elements and an
	algebraic expression expressed in terms of them.</p>
	</discussion>
        <classification>constructor</classification>
        <MMLattribute>
          <attname>type</attname>
          <attvalue> real  |  complex  |  integer  |  symbolic  | integer |  MathMLType </attvalue>
          <attdefault> real </attdefault>
        </MMLattribute>
	<rendering>
	  <graphic role="display" source="image/f4109.gif" alt="A = \left(\begin{array}{ccc} 0 &amp; 1 &amp; 0 \\ 0 &amp; 0 &amp; 1 \\ 1 &amp; 0 &amp; 0 \end{array} \right)"/>
	</rendering>
	<optype>ncontainer</optype>
        <signature>(matrixrow*) -> matrix</signature>
        <signature>[type=matrixtype](matrixrow*) -> 
matrix(type=matrixtype)</signature>
        <signature> (domainofapp,function) -> matrix </signature>
        <signature> (bvar,bvar,domainofapp,anything) -> matrix </signature>
        <property>
          <description>
            <p>scalar multiplication</p>
          </description>
        </property>
        <property role="mathml-fragment" >
	  <description>
	    <p>scalar multiplication</p>
	  </description>
	  <![CDATA[Matrix*column vector]]>
	</property>
        <property role="mathml-fragment">
          <description>
            <p>scalar multiplication</p>
          </description>
	  <![CDATA[Addition]]>
	</property>
        <property role="mathml-fragment">
          <description>
            <p>scalar multiplication</p>
          </description>
	  <![CDATA[Matrix*Matrix]]>
	</property>

        <MMLexample>
	  <![CDATA[<matrix>
  <matrixrow><cn>0</cn> <cn> 1 </cn> <cn> 0 </cn></matrixrow>
  <matrixrow><cn>0</cn> <cn> 0 </cn> <cn> 1 </cn></matrixrow>
  <matrixrow><cn>1</cn> <cn> 0 </cn> <cn> 0 </cn></matrixrow>
</matrix>]]></MMLexample>
        <MMLexample role="mathml-fragment"><![CDATA[<matrix>
  <bvar><ci type="integer">i</ci></bvar>
  <bvar><ci type="integer">j</ci></bvar>
  <condition>
    <apply><and/>
      <apply><in/>
        <ci>i</ci>
        <interval><ci>1</ci><ci>5</ci></interval>
      </apply>
      <apply><in/>
        <ci>j</ci>
        <interval><ci>5</ci><ci>9</ci></interval>
      </apply>
    </apply>
  </condition>
  <apply><power/>
    <ci>i</ci>
    <ci>j</ci>
  </apply>
</vector>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_matrixrow" cdrole="application" arity="nary" container="yes">
        <name>matrixrow</name>
        <description>
	  <p>This symbol is an n-ary constructor used to represent rows of matrices.  Its
	  arguments should be members of a ring. </p>
	</description>
	<discussion>
	  <p>The <el>matrixrow</el> element is the <emph>container</emph> element
	  for the rows of a matrix.</p>
	</discussion>
	<classification>constructor</classification>
	<rendering>
	  <p>Matrix rows are not directly rendered by themselves outside of the
	  context of a matrix.</p>
	</rendering>
	<signature>(ringelement+) -> matrixrow</signature>
        <MMLexample>
	  <![CDATA[<matrixrow><cn>1</cn><cn>2</cn></matrixrow>]]>
	</MMLexample>
      </MMLdefinition>
      

</mcd>
